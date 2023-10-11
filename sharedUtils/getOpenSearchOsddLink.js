import { getValueForTag } from './tags'

/**
 * Returns the OpenSearch OSDD link if one exists
 * @param {Object} metadata Collection metadata
 * @returns {String} OpenSearch OSDD Link
 */
export const getOpenSearchOsddLink = (metadata) => {
  const {
    hasGranules,
    links = [],
    relatedUrls = [],
    tags
  } = metadata

  let value

  // Check for an OpenSearch link
  if (links) {
    links.forEach((link) => {
      const {
        href, rel = ''
      } = link

      if (rel.indexOf('/search#') !== -1) {
        value = href
      }
    })
  }

  if (relatedUrls) {
    relatedUrls.forEach((relatedUrl) => {
      const {
        contentType,
        subtype,
        urlContentType,
        url,
        urls = []
      } = relatedUrl

      if (urlContentType === 'DistributionURL' && subtype === 'OpenSearch') {
        value = url

        return
      }

      if (contentType === 'DistributionURL' && urls.length > 0) {
        const foundUrl = urls.find((distributionURL) => {
          const { subtype: subtypeValue } = distributionURL

          return subtypeValue === 'OpenSearch'
        })

        if (foundUrl) {
          const { url: urlValue } = foundUrl
          value = urlValue
        }
      }
    })
  }

  // Fallback to the tag data if a link doesn't exist
  if (!value && !hasGranules) {
    value = getValueForTag('', tags, 'opensearch.granule.osdd')
  }

  return value
}
