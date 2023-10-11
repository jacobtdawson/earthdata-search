import { getApplicationConfig } from '../../../sharedUtils/config'
import { getDbConnection } from '../util/database/getDbConnection'
import { obfuscateId } from '../util/obfuscation/obfuscateId'
import { parseError } from '../../../sharedUtils/parseError'

const sortKeyMap = {
  '-created_at': ['projects.created_at', 'desc'],
  '+created_at': ['projects.created_at', 'asc'],
  '-username': ['users.urs_id', 'desc'],
  '+username': ['users.urs_id', 'asc']
}

/**
 * Handler for retreiving a users projects
 * @param {Object} event Details about the HTTP request that it received
 * @param {Object} context Methods and properties that provide information about the invocation, function, and execution environment
 */
const adminGetProjects = async (event, context) => {
  // https://stackoverflow.com/questions/49347210/why-aws-lambda-keeps-timing-out-when-using-knex-js
  // eslint-disable-next-line no-param-reassign
  context.callbackWaitsForEmptyEventLoop = false

  const { defaultResponseHeaders } = getApplicationConfig()

  // Retrive a connection to the database
  const dbConnection = await getDbConnection()

  try {
    const { queryStringParameters = {} } = event
    const {
      page_num: pageNum = 1,
      page_size: pageSize = 20,
      sort_key: sortKey = '-created_at'
    } = queryStringParameters || {}

    const projectsResponse = await dbConnection('projects')
      .select(
        'projects.id',
        'projects.name',
        'projects.path',
        'projects.created_at',
        'users.id as user_id',
        'users.urs_id as username'
      )
      .select(dbConnection.raw('count(*) OVER() as total'))
      .join('users', { 'projects.user_id': 'users.id' })
      .orderBy(...sortKeyMap[sortKey])
      .limit(pageSize)
      .offset((pageNum - 1) * pageSize)

    const [firstResponseRow] = projectsResponse

    const { total } = firstResponseRow

    const pagination = {
      page_num: parseInt(pageNum, 10),
      page_size: parseInt(pageSize, 10),
      page_count: Math.ceil(total / pageSize),
      total_results: parseInt(total, 10)
    }

    const results = projectsResponse.map((project) => ({
      ...project,
      obfuscated_id: obfuscateId(project.id)
    }))

    // Return the name and path
    return {
      isBase64Encoded: false,
      statusCode: 200,
      headers: defaultResponseHeaders,
      body: JSON.stringify({
        pagination,
        results
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

export default adminGetProjects
