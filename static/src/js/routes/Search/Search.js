import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom'
import {
  Form,
  OverlayTrigger,
  Tooltip
} from 'react-bootstrap'
import {
  FaMap,
  FaFilter,
  FaInfoCircle,
  FaSitemap,
  FaQuestionCircle
} from 'react-icons/fa'

import AdvancedSearchModalContainer
  from '../../containers/AdvancedSearchModalContainer/AdvancedSearchModalContainer'
import CollectionDetailsHighlightsContainer
  from '../../containers/CollectionDetailsHighlightsContainer/CollectionDetailsHighlightsContainer'
import FacetsContainer from '../../containers/FacetsContainer/FacetsContainer'
import FacetsModalContainer from '../../containers/FacetsModalContainer/FacetsModalContainer'
import GranuleResultsHighlightsContainer
  from '../../containers/GranuleResultsHighlightsContainer/GranuleResultsHighlightsContainer'
import GranuleFiltersContainer
  from '../../containers/GranuleFiltersContainer/GranuleFiltersContainer'
import PortalBrowserModalContainer
  from '../../containers/PortalBrowserModalContainer/PortalBrowserModalContainer'
import PortalFeatureContainer from '../../containers/PortalFeatureContainer/PortalFeatureContainer'
import RelatedUrlsModalContainer
  from '../../containers/RelatedUrlsModalContainer/RelatedUrlsModalContainer'
import SearchPanelsContainer from '../../containers/SearchPanelsContainer/SearchPanelsContainer'
import SearchSidebarHeaderContainer
  from '../../containers/SearchSidebarHeaderContainer/SearchSidebarHeaderContainer'
import SidebarContainer from '../../containers/SidebarContainer/SidebarContainer'

import SidebarSection from '../../components/Sidebar/SidebarSection'
import SidebarFiltersItem from '../../components/Sidebar/SidebarFiltersItem'
import SidebarFiltersList from '../../components/Sidebar/SidebarFiltersList'
import EDSCIcon from '../../components/EDSCIcon/EDSCIcon'

import actions from '../../actions'
import advancedSearchFields from '../../data/advancedSearchFields'
import Button from '../../components/Button/Button'

export const mapDispatchToProps = (dispatch) => ({
  onUpdateAdvancedSearch:
    (values) => dispatch(actions.updateAdvancedSearch(values)),
  onChangeQuery:
    (query) => dispatch(actions.changeQuery(query)),
  onTogglePortalBrowserModal:
    (data) => dispatch(actions.togglePortalBrowserModal(data))
})

export const mapStateToProps = (state) => ({
  collectionQuery: state.query.collection
})

/**
 * Search route components
 * @param {Object} props - The props passed into the component.
 * @param {Object} props.collectionQuery - Collection query state
 * @param {Object} props.match - Router match state
 * @param {Function} props.onChangeQuery - Callback to change the query
 * @param {Function} props.onTogglePortalBrowserModal - Callback to update the portal browser modal state
 * @param {Function} props.onUpdateAdvancedSearch - Callback to update the advanced search state
 */
export const Search = ({
  collectionQuery,
  match,
  onChangeQuery,
  onTogglePortalBrowserModal,
  onUpdateAdvancedSearch
}) => {
  const { path } = match
  const [granuleFiltersNeedsReset, setGranuleFiltersNeedReset] = useState(false)

  const {
    hasGranulesOrCwic = false,
    onlyEosdisCollections
  } = collectionQuery

  const isHasNoGranulesChecked = !hasGranulesOrCwic
  const isEosdisChecked = onlyEosdisCollections || false

  const handleCheckboxCheck = (event) => {
    const { target } = event
    const { checked, id } = target

    const collection = {}
    if (id === 'input__non-eosdis') {
      if (!checked) collection.onlyEosdisCollections = undefined
      if (checked) collection.onlyEosdisCollections = true
    }

    if (id === 'input__only-granules') {
      if (!checked) collection.hasGranulesOrCwic = true
      if (checked) collection.hasGranulesOrCwic = undefined
    }

    onChangeQuery({
      collection
    })
  }

  const granuleFiltersSidebar = (
    <SidebarSection
      sectionTitle="Filter Granules"
      titleIcon={FaFilter}
      headerAction={
        {
          title: 'Clear Filters',
          onClick: () => {
            setGranuleFiltersNeedReset(true)
          }
        }
      }
    >
      <GranuleFiltersContainer
        granuleFiltersNeedsReset={granuleFiltersNeedsReset}
        setGranuleFiltersNeedReset={setGranuleFiltersNeedReset}
      />
    </SidebarSection>
  )

  return (
    <div className="route-wrapper route-wrapper--search search">
      <SidebarContainer
        headerChildren={(
          <SearchSidebarHeaderContainer />
        )}
        panels={<SearchPanelsContainer />}
      >
        <Switch>
          <Route exact path={`${path}/granules/collection-details`}>
            <SidebarSection
              sectionTitle="Granules"
              titleIcon={FaMap}
            >
              <GranuleResultsHighlightsContainer />
            </SidebarSection>
          </Route>
          <Route exact path={`${path}/granules`}>
            {granuleFiltersSidebar}
          </Route>
          <Route exact path={`${path}/granules/granule-details`}>
            <SidebarSection
              sectionTitle="Collection Details"
              titleIcon={FaInfoCircle}
            >
              <CollectionDetailsHighlightsContainer />
            </SidebarSection>
          </Route>
          <Route exact path={`${path}/granules/subscriptions`}>
            {granuleFiltersSidebar}
          </Route>
          <Route path={path}>
            <SidebarSection>
              <Button
                variant="full"
                bootstrapVariant="light"
                icon={FaSitemap}
                onClick={() => onTogglePortalBrowserModal(true)}
              >
                Browse Portals
                <OverlayTrigger
                  placement="top"
                  overlay={
                    (
                      <Tooltip style={{ width: '20rem' }}>
                        {/* eslint-disable-next-line max-len */}
                        Enable a portal in order to refine the data available within Earthdata Search
                      </Tooltip>
                    )
                  }
                >
                  <EDSCIcon icon={FaQuestionCircle} size="0.625rem" variant="more-info" />
                </OverlayTrigger>
              </Button>
            </SidebarSection>
            <SidebarSection
              sectionTitle="Filter Collections"
              titleIcon={FaFilter}
            >
              <SidebarFiltersList>
                <SidebarFiltersItem
                  hasPadding={false}
                >
                  <FacetsContainer />
                </SidebarFiltersItem>
                <PortalFeatureContainer
                  onlyGranulesCheckbox
                  nonEosdisCheckbox
                >
                  <SidebarFiltersItem
                    heading="Additional Filters"
                  >
                    <Form.Group controlId="collection-filters__has-no-granules">
                      <PortalFeatureContainer onlyGranulesCheckbox>
                        <Form.Check
                          checked={isHasNoGranulesChecked}
                          id="input__only-granules"
                          data-testid="input_only-granules"
                          label="Include collections without granules"
                          onChange={(event) => handleCheckboxCheck(event)}
                        />
                      </PortalFeatureContainer>
                      <PortalFeatureContainer nonEosdisCheckbox>
                        <Form.Check
                          checked={isEosdisChecked}
                          id="input__non-eosdis"
                          data-testid="input_non-eosdis"
                          label="Include only EOSDIS collections"
                          onChange={(event) => handleCheckboxCheck(event)}
                        />
                      </PortalFeatureContainer>
                    </Form.Group>
                  </SidebarFiltersItem>
                </PortalFeatureContainer>
              </SidebarFiltersList>
            </SidebarSection>
          </Route>
        </Switch>
      </SidebarContainer>
      <div className="route-wrapper__content">
        <PortalBrowserModalContainer />
        <RelatedUrlsModalContainer />
        <FacetsModalContainer />
        <PortalFeatureContainer advancedSearch>
          <AdvancedSearchModalContainer
            fields={advancedSearchFields}
            onUpdateAdvancedSearch={onUpdateAdvancedSearch}
          />
        </PortalFeatureContainer>
      </div>
    </div>
  )
}

Search.propTypes = {
  collectionQuery: PropTypes.shape({
    hasGranulesOrCwic: PropTypes.bool,
    onlyEosdisCollections: PropTypes.bool
  }).isRequired,
  match: PropTypes.shape({
    path: PropTypes.string
  }).isRequired,
  onChangeQuery: PropTypes.func.isRequired,
  onTogglePortalBrowserModal: PropTypes.func.isRequired,
  onUpdateAdvancedSearch: PropTypes.func.isRequired
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Search)
)
