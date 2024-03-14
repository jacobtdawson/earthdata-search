import actions from './index'

import { UPDATE_FOCUSED_COLLECTION, UPDATE_GRANULE_SUBSCRIPTIONS } from '../constants/actionTypes'

import { createFocusedCollectionMetadata } from '../util/focusedCollection'
import { eventEmitter } from '../events/events'
import { getValueForTag } from '../../../../sharedUtils/tags'
import { getApplicationConfig } from '../../../../sharedUtils/config'
import { getCollectionsQuery } from '../selectors/query'
import { getEarthdataEnvironment } from '../selectors/earthdataEnvironment'
import { getFocusedCollectionId } from '../selectors/focusedCollection'
import { getFocusedCollectionMetadata } from '../selectors/collectionMetadata'
import { getGranuleSortPreference } from '../selectors/preferences'
import { getOpenSearchOsddLink } from '../../../../sharedUtils/getOpenSearchOsddLink'
import { getUsername } from '../selectors/user'
import { isCSDACollection } from '../util/isCSDACollection'
import { parseGraphQLError } from '../../../../sharedUtils/parseGraphQLError'

import GraphQlRequest from '../util/request/graphQlRequest'

/**
 * Sets the focused collection value in redux
 * @param {String} payload Concept ID of the collection to set as focused
 */
export const updateFocusedCollection = (payload) => ({
  type: UPDATE_FOCUSED_COLLECTION,
  payload
})

/**
 * Perform a collection request based on the focusedCollection from the store.
 */
export const getFocusedCollection = () => async (dispatch, getState) => {
  const state = getState()

  const {
    authToken,
    router
  } = state

  // Send the relevency metric event
  dispatch(actions.collectionRelevancyMetrics())

  // Retrieve data from Redux using selectors
  const collectionsQuery = getCollectionsQuery(state)
  const earthdataEnvironment = getEarthdataEnvironment(state)
  const focusedCollectionId = getFocusedCollectionId(state)
  const focusedCollectionMetadata = getFocusedCollectionMetadata(state)
  const username = getUsername(state)

  // Use the `hasAllMetadata` flag to determine if we've requested previously
  // requested the focused collections metadata from graphql
  const {
    hasAllMetadata = false,
    isOpenSearch = false
  } = focusedCollectionMetadata

  // Determine if the user has searched using a polygon
  const { spatial } = collectionsQuery
  const { polygon } = spatial

  // CWIC does not support polygon search, if this is a CWIC collection
  // fire an action that will display a notice to the user about using a MBR
  if (isOpenSearch && polygon) {
    dispatch(actions.toggleSpatialPolygonWarning(true))
  } else {
    dispatch(actions.toggleSpatialPolygonWarning(false))
  }

  // If we already have the metadata for the focusedCollection, don't fetch it again
  if (hasAllMetadata) {
    // Ensure the granules have been retrieved
    dispatch(actions.getSearchGranules())

    return null
  }

  // Retrieve the default CMR tags to provide to the collection request
  const { defaultCmrSearchTags } = getApplicationConfig()

  const graphQlRequestObject = new GraphQlRequest(authToken, earthdataEnvironment)

  const graphQuery = `
    query GetCollection(
      $params: CollectionInput, $subcriptionParams: SubscriptionsInput
    ) {
      collection (params: $params) {
        abstract
        archiveAndDistributionInformation
        associatedDois
        boxes
        cloudHosted
        conceptId
        coordinateSystem
        dataCenter
        dataCenters
        directDistributionInformation
        doi
        duplicateCollections {
          count
          items {
            id
          }
        }
        hasGranules
        lines
        nativeDataFormats
        points
        polygons
        relatedUrls
        relatedCollections (
          limit: 3
        ) {
          count
          items {
            id
            title
          }
        }
        scienceKeywords
        shortName
        spatialExtent
        tags
        temporalExtents
        tilingIdentificationSystems
        title
        versionId
        services {
          count
          items {
            conceptId
            longName
            name
            type
            url
            serviceOptions
            supportedOutputProjections
            supportedReformattings
          }
        }
        granules {
          count
          items {
            conceptId
            onlineAccessFlag
          }
        }
        subscriptions (
          params: $subcriptionParams
        ) {
          count
          items {
            collectionConceptId
            conceptId
            name
            nativeId
            query
            type
          }
        }
        tools {
          count
          items {
            longName
            name
            potentialAction
          }
        }
        variables {
          count
          items {
            conceptId
            definition
            instanceInformation
            longName
            name
            nativeId
            scienceKeywords
          }
        }
      }
    }`

  const response = graphQlRequestObject.search(graphQuery, {
    params: {
      conceptId: focusedCollectionId,
      includeHasGranules: true,
      includeTags: defaultCmrSearchTags.join(',')
    },
    subcriptionParams: {
      subscriberId: username
    }
  })
    .then((responseObject) => {
      const payload = []

      const {
        data: responseData
      } = responseObject

      const { data } = responseData
      const { collection } = data

      // If no results were returned, graphql will return `null`
      if (collection) {
        const {
          abstract,
          archiveAndDistributionInformation,
          associatedDois,
          boxes,
          cloudHosted,
          conceptId,
          coordinateSystem,
          dataCenter,
          dataCenters,
          duplicateCollections,
          granules,
          hasGranules,
          nativeDataFormats,
          relatedCollections,
          services,
          shortName,
          subscriptions,
          tags,
          tilingIdentificationSystems,
          title,
          tools,
          variables,
          versionId
        } = collection

        // Look and see if there are any gibs tags
        // If there are, check to see if the colormaps associated with the productids in the tags exists.
        // If they don't we call an action to pull the colorMaps and add them to the metadata.colormaps
        const gibsTags = tags ? getValueForTag('gibs', tags) : null
        if (gibsTags && gibsTags.length > 0) {
          const { product } = gibsTags[0]
          dispatch(actions.getColorMap({ product }))
        }

        // Formats the metadata returned from graphql for use throughout the application
        const focusedMetadata = createFocusedCollectionMetadata(
          collection,
          authToken,
          earthdataEnvironment
        )

        payload.push({
          abstract,
          archiveAndDistributionInformation,
          associatedDois,
          boxes,
          cloudHosted,
          coordinateSystem,
          dataCenter,
          duplicateCollections,
          granules,
          hasAllMetadata: true,
          hasGranules,
          id: conceptId,
          isCSDA: isCSDACollection(dataCenters),
          isOpenSearch: !!getOpenSearchOsddLink(collection),
          nativeDataFormats,
          relatedCollections,
          services,
          shortName,
          subscriptions,
          tags,
          tilingIdentificationSystems,
          title,
          tools,
          variables,
          versionId,
          ...focusedMetadata
        })

        // A users authToken will come back with an authenticated request if a valid token was used

        // Update metadata in the store
        dispatch(actions.updateCollectionMetadata(payload))

        // Query CMR for granules belonging to the focused collection
        dispatch(actions.getSearchGranules())
      } else {
        // If no data was returned, clear the focused collection and redirect the user back to the search page
        dispatch(actions.updateFocusedCollection(''))

        const { location } = router
        const { search } = location

        dispatch(actions.changeUrl({
          pathname: '/search',
          search
        }))
      }
    })
    .catch((error) => {
      dispatch(actions.handleError({
        error,
        action: 'getFocusedCollection',
        resource: 'collection',
        requestObject: graphQlRequestObject
      }))
    })

  return response
}

/**
 * Request subscriptions for the focused collection
 */
export const getGranuleSubscriptions = (collectionId) => async (dispatch, getState) => {
  const state = getState()

  const {
    authToken
  } = state

  let collectionConceptId = collectionId

  // Retrieve data from Redux using selectors
  const earthdataEnvironment = getEarthdataEnvironment(state)
  if (collectionId == null) {
    collectionConceptId = getFocusedCollectionId(state)
  }

  const username = getUsername(state)

  const graphQlRequestObject = new GraphQlRequest(authToken, earthdataEnvironment)

  const graphQuery = `
    query GetGranuleSubscriptions($params: SubscriptionsInput) {
      subscriptions(params: $params) {
        count
        items {
          collectionConceptId
          conceptId
          name
          nativeId
          query
          type
        }
      }
    }`

  const response = graphQlRequestObject.search(graphQuery, {
    params: {
      collectionConceptId,
      subscriberId: username,
      type: 'granule'
    }
  })
    .then((responseObject) => {
      parseGraphQLError(responseObject)

      const {
        data: responseData
      } = responseObject.data

      const { subscriptions } = responseData

      dispatch({
        type: UPDATE_GRANULE_SUBSCRIPTIONS,
        payload: {
          collectionId: collectionConceptId,
          subscriptions
        }
      })
    })
    .catch((error) => {
      dispatch(actions.handleError({
        error,
        action: 'getGranuleSubscriptions',
        resource: 'subscription',
        requestObject: graphQlRequestObject
      }))
    })

  return response
}

/**
 * Change the focusedCollection, and get the focusedCollection metadata.
 * @param {String} collectionId The collection id the user has requested to focus
 */
export const changeFocusedCollection = (collectionId) => (dispatch, getState) => {
  dispatch(actions.updateFocusedCollection(collectionId))

  const state = getState()

  if (collectionId === '') {
    // If clearing the focused collection, also clear the focused granule
    dispatch(actions.changeFocusedGranule(''))
    // And clear the spatial polygon warning if there is no focused collection
    dispatch(actions.toggleSpatialPolygonWarning(false))

    eventEmitter.emit(`map.layer.${collectionId}.stickygranule`, { granule: null })

    const { router } = state
    const { location } = router
    const { search } = location

    // If clearing the focused collection, redirect the user back to the search page
    dispatch(actions.changeUrl({
      pathname: '/search',
      search
    }))
  } else {
    // Initialize a nested query element in Redux for the new focused collection
    const granuleSortPreference = getGranuleSortPreference(state)
    dispatch(actions.initializeCollectionGranulesQuery({
      collectionId,
      granuleSortPreference
    }))

    // Initialize a nested search results element in Redux for the new focused collection
    dispatch(actions.initializeCollectionGranulesResults(collectionId))

    // Fetch the focused collection metadata
    dispatch(actions.getFocusedCollection())

    // Fetch timeline data for the focused collection
    dispatch(actions.getTimeline())
  }
}

/**
 * Changes the focused collection and redirects the user to the focused collection route
 * @param {String} collectionId The collection id the user has requested to view details of
 */
export const viewCollectionDetails = (collectionId) => (dispatch, getState) => {
  // Update the focused collection in redux and retrieve its metadata
  dispatch(actions.changeFocusedCollection(collectionId))

  const { router } = getState()
  const { location } = router
  const { search } = location

  dispatch(actions.changeUrl({
    pathname: '/search/granules/collection-details',
    search
  }))
}

/**
 * Changes the focused collection and redirects the user to the collection granules route
 * @param {String} collectionId The collection id the user has requested to view granules for
 */
export const viewCollectionGranules = (collectionId) => (dispatch, getState) => {
  // Update the focused collection in redux and retrieve its metadata
  dispatch(actions.changeFocusedCollection(collectionId))

  const { router } = getState()
  const { location } = router
  const { search } = location

  dispatch(actions.changeUrl({
    pathname: '/search/granules',
    search
  }))
}
