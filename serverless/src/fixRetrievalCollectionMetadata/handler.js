import 'array-foreach-async'

import { getApplicationConfig } from '../../../sharedUtils/config'
import { getDbConnection } from '../util/database/getDbConnection'
import { parseError } from '../../../sharedUtils/parseError'

/**
 * Iterates through every record in the retrieval collections table correcting rows that have been incorrectly as part of the Redux updates
 * @param {Object} event Details about the HTTP request that it received
 * @param {Object} context Methods and properties that provide information about the invocation, function, and execution environment
 */
export default async function fixRetrievalCollectionMetadata(event, context) {
  // https://stackoverflow.com/questions/49347210/why-aws-lambda-keeps-timing-out-when-using-knex-js
  // eslint-disable-next-line no-param-reassign
  context.callbackWaitsForEmptyEventLoop = false

  const { defaultResponseHeaders } = getApplicationConfig()

  try {
    let fixedRecords = 0

    // Retrieve a connection to the database
    const dbConnection = await getDbConnection()

    const retrievalCollectionsResponse = await dbConnection('retrieval_collections')
      .select('id', 'collection_id', 'collection_metadata')

    await retrievalCollectionsResponse.forEachAsync(async (record) => {
      const {
        id,
        collection_id: collectionId,
        collection_metadata: collectionMetadata
      } = record

      // If the keys of the current metadata include the collection id of the record, the data is incorrect.
      if (Object.keys(collectionMetadata).includes(collectionId)) {
        const { [collectionId]: individualMetadata } = collectionMetadata

        // Update the record returning the id of successfully updated records
        const updatedRecords = await dbConnection('retrieval_collections')
          .update({
            collection_metadata: individualMetadata
          }, ['id'])
          .where({
            id
          })

        if (updatedRecords.length > 0) {
          fixedRecords += 1
        }
      }
    })

    return {
      isBase64Encoded: false,
      statusCode: 200,
      headers: defaultResponseHeaders,
      body: JSON.stringify({
        totalRecords: retrievalCollectionsResponse.length,
        fixedRecords
      })
    }
  } catch (error) {
    return {
      isBase64Encoded: false,
      headers: defaultResponseHeaders,
      ...parseError(error)
    }
  }
}
