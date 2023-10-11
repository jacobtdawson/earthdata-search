import { getDbConnection } from '../util/database/getDbConnection'
import { deobfuscateId } from '../util/obfuscation/deobfuscateId'
import { getApplicationConfig } from '../../../sharedUtils/config'
import { parseError } from '../../../sharedUtils/parseError'

/**
 * Retrieve a single project from the database
 * @param {Object} event Details about the HTTP request that it received
 * @param {Object} context Methods and properties that provide information about the invocation, function, and execution environment
 */
const adminGetProject = async (event, context) => {
  // https://stackoverflow.com/questions/49347210/why-aws-lambda-keeps-timing-out-when-using-knex-js
  // eslint-disable-next-line no-param-reassign
  context.callbackWaitsForEmptyEventLoop = false

  const { defaultResponseHeaders } = getApplicationConfig()

  const { pathParameters } = event
  const {
    id: providedProjectId
  } = pathParameters

  const decodedProjectId = deobfuscateId(providedProjectId)

  // Retrive a connection to the database
  const dbConnection = await getDbConnection()

  try {
    const existingProjectRecord = await dbConnection('projects')
      .first(
        'projects.id',
        'projects.name',
        'projects.path',
        'projects.created_at',
        'users.id as user_id',
        'users.urs_id as username'
      )
      .join('users', { 'projects.user_id': 'users.id' })
      .where({
        'projects.id': decodedProjectId
      })

    if (existingProjectRecord && existingProjectRecord !== null) {
      // Return the name and path
      return {
        isBase64Encoded: false,
        statusCode: 200,
        headers: defaultResponseHeaders,
        body: JSON.stringify({
          ...existingProjectRecord,
          obfuscated_id: providedProjectId
        })
      }
    }

    return {
      isBase64Encoded: false,
      statusCode: 404,
      headers: defaultResponseHeaders,
      body: JSON.stringify({ errors: [`Project '${providedProjectId}' not found.`] })
    }
  } catch (error) {
    return {
      isBase64Encoded: false,
      headers: defaultResponseHeaders,
      ...parseError(error)
    }
  }
}

export default adminGetProject
