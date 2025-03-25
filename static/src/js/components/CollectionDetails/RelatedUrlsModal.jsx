import React from 'react'
import PropTypes from 'prop-types'

import EDSCModalContainer from '../../containers/EDSCModalContainer/EDSCModalContainer'
import ArrowTags from '../ArrowTags/ArrowTags'

import { pluralize } from '../../util/pluralize'

import './RelatedUrlsModal.scss'

export const RelatedUrlsModal = ({
  collectionMetadata,
  isOpen,
  onToggleRelatedUrlsModal
}) => {
  const { relatedUrls = [] } = collectionMetadata

  const body = (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {
        relatedUrls && relatedUrls.map((category, i) => {
          if (category.urls.length) {
            const key = `modal_related_url_${i}`

            return (
              <div key={key} className="related-urls-modal__group">
                <h4 className="related-urls-modal__group-title">{pluralize(category.label, category.urls)}</h4>
                {
                  category.urls.map((url, j) => {
                    const urlKey = `modal_related_url_${i}-${j}`

                    return (
                      <ul key={urlKey} className="related-urls-modal__url">
                        <ArrowTags tags={[url.type, url.subtype]} />
                        {/* eslint-disable-next-line react/jsx-no-target-blank */}
                        <a className="related-urls-modal__link" href={url.url} target="_blank">{url.url}</a>
                      </ul>
                    )
                  })
                }
              </div>
            )
          }

          return null
        })
      }
    </>
  )

  return (
    <EDSCModalContainer
      className="related-urls"
      title="Related URLs"
      isOpen={isOpen}
      id="related-urls"
      size="lg"
      onClose={
        () => {
          onToggleRelatedUrlsModal(false)
        }
      }
      body={body}
    />
  )
}

RelatedUrlsModal.propTypes = {
  collectionMetadata: PropTypes.shape({
    relatedUrls: PropTypes.arrayOf(PropTypes.shape({}))
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggleRelatedUrlsModal: PropTypes.func.isRequired
}

export default RelatedUrlsModal
