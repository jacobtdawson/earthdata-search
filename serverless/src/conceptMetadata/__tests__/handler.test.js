import conceptMetadata from '../handler'

import * as getAccessTokenFromJwtToken from '../../util/urs/getAccessTokenFromJwtToken'

beforeEach(() => {
  jest.clearAllMocks()
})

describe('conceptMetadata', () => {
  test('returns a redirect', async () => {
    jest.spyOn(getAccessTokenFromJwtToken, 'getAccessTokenFromJwtToken').mockImplementation(() => ({ access_token: 'access_token' }))

    const event = {
      queryStringParameters: {
        url: 'http://example.com/concepts',
        token: 'mockToken'
      }
    }

    const result = await conceptMetadata(event)

    expect(result.headers).toEqual({ Location: 'http://example.com/concepts?token=Bearer access_token' })
    expect(result.statusCode).toBe(307)
  })

  test('returns a redirect correctly when the provided url has query params', async () => {
    jest.spyOn(getAccessTokenFromJwtToken, 'getAccessTokenFromJwtToken').mockImplementation(() => ({ access_token: 'access_token' }))

    const event = {
      queryStringParameters: {
        url: 'http://example.com/concepts?id=42',
        token: 'mockToken'
      }
    }

    const result = await conceptMetadata(event)

    expect(result.headers).toEqual({ Location: 'http://example.com/concepts?id=42&token=Bearer access_token' })
    expect(result.statusCode).toBe(307)
  })
})
