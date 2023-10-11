import { buildAccessMethods } from '../buildAccessMethods'

describe('buildAccessMethods', () => {
  test('returns a download access method', () => {
    const collectionMetadata = {
      granules: {
        items: [{
          online_access_flag: true
        }]
      }
    }
    const isOpenSearch = false

    const methods = buildAccessMethods(collectionMetadata, isOpenSearch)

    expect(methods).toEqual({
      download: {
        isValid: true,
        type: 'download'
      }
    })
  })

  test('returns a download access method for open search', () => {
    const collectionMetadata = {}
    const isOpenSearch = true

    const methods = buildAccessMethods(collectionMetadata, isOpenSearch)

    expect(methods).toEqual({
      download: {
        isValid: true,
        type: 'download'
      }
    })
  })

  test('returns an esi access method', () => {
    const collectionMetadata = {
      services: {
        items: [{
          type: 'ESI',
          url: {
            urlValue: 'https://example.com'
          },
          orderOptions: {
            items: [{
              conceptId: 'OO10000-EDSC',
              name: 'mock form',
              form: 'mock form'
            }]
          }
        }]
      }
    }
    const isOpenSearch = false

    const methods = buildAccessMethods(collectionMetadata, isOpenSearch)

    expect(methods).toEqual({
      esi0: {
        form: 'mock form',
        formDigest: '75f9480053e9ba083665951820d17ae5c2139d92',
        optionDefinition: {
          conceptId: 'OO10000-EDSC',
          name: 'mock form'
        },
        type: 'ESI',
        url: 'https://example.com'
      }
    })
  })

  test('returns an echo orders access method', () => {
    const collectionMetadata = {
      services: {
        items: [{
          type: 'ECHO ORDERS',
          url: {
            urlValue: 'https://example.com'
          },
          maxItemsPerOrder: 2000,
          orderOptions: {
            items: [{
              conceptId: 'OO10000-EDSC',
              name: 'mock form',
              form: 'mock form'
            }]
          }
        }]
      }
    }
    const isOpenSearch = false

    const methods = buildAccessMethods(collectionMetadata, isOpenSearch)

    expect(methods).toEqual({
      echoOrder0: {
        form: 'mock form',
        formDigest: '75f9480053e9ba083665951820d17ae5c2139d92',
        optionDefinition: {
          conceptId: 'OO10000-EDSC',
          name: 'mock form'
        },
        type: 'ECHO ORDERS',
        maxItemsPerOrder: 2000,
        url: 'https://example.com'
      }
    })
  })

  test('returns a harmony access method', () => {
    const collectionMetadata = {
      services: {
        items: [{
          conceptId: 'S100000-EDSC',
          longName: 'Mock Service Name',
          name: 'mock-name',
          type: 'Harmony',
          url: {
            description: 'Mock URL',
            urlValue: 'https://example.com'
          },
          serviceOptions: {
            subset: {
              spatialSubset: {
                boundingBox: {
                  allowMultipleValues: false
                }
              },
              variableSubset: {
                allowMultipleValues: true
              }
            },
            supportedOutputProjections: [{
              projectionName: 'Polar Stereographic'
            }, {
              projectionName: 'Geographic'
            }],
            interpolationTypes: [
              'Bilinear Interpolation',
              'Nearest Neighbor'
            ],
            supportedReformattings: [{
              supportedInputFormat: 'NETCDF-4',
              supportedOutputFormats: [
                'GEOTIFF',
                'PNG',
                'TIFF',
                'NETCDF-4'
              ]
            }, {
              supportedInputFormat: 'GEOTIFF',
              supportedOutputFormats: [
                'GEOTIFF',
                'PNG',
                'TIFF',
                'NETCDF-4'
              ]
            }]
          },
          supportedOutputProjections: [{
            projectionName: 'Polar Stereographic'
          }, {
            projectionName: 'Geographic'
          }],
          supportedReformattings: [{
            supportedInputFormat: 'NETCDF-4',
            supportedOutputFormats: [
              'GEOTIFF',
              'PNG',
              'TIFF',
              'NETCDF-4'
            ]
          }, {
            supportedInputFormat: 'GEOTIFF',
            supportedOutputFormats: [
              'GEOTIFF',
              'PNG',
              'TIFF',
              'NETCDF-4'
            ]
          }],
          variables: {
            count: 4,
            items: [{
              conceptId: 'V100000-EDSC',
              definition: 'Alpha channel value',
              longName: 'Alpha channel ',
              name: 'alpha_var',
              nativeId: 'mmt_variable_3972',
              scienceKeywords: null
            }, {
              conceptId: 'V100001-EDSC',
              definition: 'Blue channel value',
              longName: 'Blue channel',
              name: 'blue_var',
              nativeId: 'mmt_variable_3971',
              scienceKeywords: null
            }, {
              conceptId: 'V100002-EDSC',
              definition: 'Green channel value',
              longName: 'Green channel',
              name: 'green_var',
              nativeId: 'mmt_variable_3970',
              scienceKeywords: null
            }, {
              conceptId: 'V100003-EDSC',
              definition: 'Red channel value',
              longName: 'Red Channel',
              name: 'red_var',
              nativeId: 'mmt_variable_3969',
              scienceKeywords: null
            }]
          }
        }]
      }
    }
    const isOpenSearch = false

    const methods = buildAccessMethods(collectionMetadata, isOpenSearch)

    expect(methods).toEqual({
      harmony0: {
        enableTemporalSubsetting: true,
        enableSpatialSubsetting: true,
        hierarchyMappings: [
          {
            id: 'V100000-EDSC'
          },
          {
            id: 'V100001-EDSC'
          },
          {
            id: 'V100002-EDSC'
          },
          {
            id: 'V100003-EDSC'
          }
        ],
        id: 'S100000-EDSC',
        isValid: true,
        keywordMappings: [],
        longName: 'Mock Service Name',
        name: 'mock-name',
        supportedOutputFormats: [
          'GEOTIFF',
          'PNG',
          'TIFF',
          'NETCDF-4'
        ],
        supportedOutputProjections: [],
        supportsBoundingBoxSubsetting: true,
        supportsShapefileSubsetting: false,
        supportsTemporalSubsetting: false,
        supportsVariableSubsetting: true,
        type: 'Harmony',
        url: 'https://example.com',
        variables: {
          'V100000-EDSC': {
            conceptId: 'V100000-EDSC',
            definition: 'Alpha channel value',
            longName: 'Alpha channel ',
            name: 'alpha_var',
            nativeId: 'mmt_variable_3972',
            scienceKeywords: null
          },
          'V100001-EDSC': {
            conceptId: 'V100001-EDSC',
            definition: 'Blue channel value',
            longName: 'Blue channel',
            name: 'blue_var',
            nativeId: 'mmt_variable_3971',
            scienceKeywords: null
          },
          'V100002-EDSC': {
            conceptId: 'V100002-EDSC',
            definition: 'Green channel value',
            longName: 'Green channel',
            name: 'green_var',
            nativeId: 'mmt_variable_3970',
            scienceKeywords: null
          },
          'V100003-EDSC': {
            conceptId: 'V100003-EDSC',
            definition: 'Red channel value',
            longName: 'Red Channel',
            name: 'red_var',
            nativeId: 'mmt_variable_3969',
            scienceKeywords: null
          }
        }
      }
    })
  })

  test('returns an opendap access method', () => {
    const collectionMetadata = {
      services: {
        items: [{
          conceptId: 'S100000-EDSC',
          longName: 'Mock Service Name',
          name: 'mock-name',
          type: 'OPeNDAP',
          url: {
            description: 'Mock URL',
            urlValue: 'https://example.com'
          },
          serviceOptions: {
            supportedInputProjections: [{
              projectionName: 'Geographic'
            }],
            supportedOutputProjections: [{
              projectionName: 'Geographic'
            }],
            supportedReformattings: [{
              supportedInputFormat: 'ASCII',
              supportedOutputFormats: [
                'ASCII',
                'BINARY',
                'NETCDF-4'
              ]
            }, {
              supportedInputFormat: 'BINARY',
              supportedOutputFormats: [
                'ASCII',
                'BINARY',
                'NETCDF-4'
              ]
            }, {
              supportedInputFormat: 'NETCDF-4',
              supportedOutputFormats: [
                'ASCII',
                'BINARY',
                'NETCDF-4'
              ]
            }],
            subset: {
              spatialSubset: {
                boundingBox: {
                  allowMultipleValues: false
                }
              },
              variableSubset: {
                allowMultipleValues: true
              }
            }
          },
          supportedOutputProjections: [{
            projectionName: 'Geographic'
          }],
          supportedReformattings: [{
            supportedInputFormat: 'ASCII',
            supportedOutputFormats: [
              'ASCII',
              'BINARY',
              'NETCDF-4'
            ]
          }, {
            supportedInputFormat: 'BINARY',
            supportedOutputFormats: [
              'ASCII',
              'BINARY',
              'NETCDF-4'
            ]
          }, {
            supportedInputFormat: 'NETCDF-4',
            supportedOutputFormats: [
              'ASCII',
              'BINARY',
              'NETCDF-4'
            ]
          }],
          orderOptions: {
            count: 0,
            items: null
          },
          variables: {
            count: 4,
            items: [{
              conceptId: 'V100000-EDSC',
              definition: 'analysed_sst in units of kelvin',
              longName: 'analysed_sst',
              name: 'analysed_sst',
              nativeId: 'e2eTestVarHiRes1',
              scienceKeywords: [{
                category: 'Earth Science',
                topic: 'Oceans',
                term: 'Ocean Temperature',
                variableLevel1: 'Sea Surface Temperature'
              }]
            }, {
              conceptId: 'V100001-EDSC',
              definition: 'analysis_error in units of kelvin',
              longName: 'analysis_error',
              name: 'analysis_error',
              nativeId: 'e2eTestVarHiRes2',
              scienceKeywords: [
                {
                  category: 'Earth Science',
                  topic: 'Oceans',
                  term: 'Ocean Temperature',
                  variableLevel1: 'Sea Surface Temperature'
                }
              ]
            }, {
              conceptId: 'V100002-EDSC',
              definition: 'mask in units of seconds since 1981-0',
              longName: 'mask',
              name: 'mask',
              nativeId: 'e2eTestVarHiRes4',
              scienceKeywords: [{
                category: 'Earth Science',
                topic: 'Oceans',
                term: 'Ocean Temperature',
                variableLevel1: 'Sea Surface Temperature'
              }]
            }, {
              conceptId: 'V100003-EDSC',
              definition: 'sea_ice_fraction in units of fraction (between 0 ',
              longName: 'sea_ice_fraction',
              name: 'sea_ice_fraction',
              nativeId: 'e2eTestVarHiRes3',
              scienceKeywords: [{
                category: 'Earth Science',
                topic: 'Oceans',
                term: 'Ocean Temperature',
                variableLevel1: 'Sea Surface Temperature'
              }]
            }]
          }
        }]
      }
    }
    const isOpenSearch = false

    const methods = buildAccessMethods(collectionMetadata, isOpenSearch)

    expect(methods).toEqual({
      opendap: {
        hierarchyMappings: [{
          id: 'V100000-EDSC'
        }, {
          id: 'V100001-EDSC'
        }, {
          id: 'V100002-EDSC'
        }, {
          id: 'V100003-EDSC'
        }],
        id: 'S100000-EDSC',
        isValid: true,
        keywordMappings: [{
          children: [{
            id: 'V100000-EDSC'
          }, {
            id: 'V100001-EDSC'
          }, {
            id: 'V100002-EDSC'
          }, {
            id: 'V100003-EDSC'
          }],
          label: 'Sea Surface Temperature'
        }],
        longName: 'Mock Service Name',
        name: 'mock-name',
        supportedOutputFormats: ['ASCII', 'BINARY', 'NETCDF-4'],
        supportsVariableSubsetting: true,
        type: 'OPeNDAP',
        variables: {
          'V100000-EDSC': {
            conceptId: 'V100000-EDSC',
            definition: 'analysed_sst in units of kelvin',
            longName: 'analysed_sst',
            name: 'analysed_sst',
            nativeId: 'e2eTestVarHiRes1',
            scienceKeywords: [{
              category: 'Earth Science',
              topic: 'Oceans',
              term: 'Ocean Temperature',
              variableLevel1: 'Sea Surface Temperature'
            }]
          },
          'V100001-EDSC': {
            conceptId: 'V100001-EDSC',
            definition: 'analysis_error in units of kelvin',
            longName: 'analysis_error',
            name: 'analysis_error',
            nativeId: 'e2eTestVarHiRes2',
            scienceKeywords: [{
              category: 'Earth Science',
              topic: 'Oceans',
              term: 'Ocean Temperature',
              variableLevel1: 'Sea Surface Temperature'
            }]
          },
          'V100002-EDSC': {
            conceptId: 'V100002-EDSC',
            definition: 'mask in units of seconds since 1981-0',
            longName: 'mask',
            name: 'mask',
            nativeId: 'e2eTestVarHiRes4',
            scienceKeywords: [{
              category: 'Earth Science',
              topic: 'Oceans',
              term: 'Ocean Temperature',
              variableLevel1: 'Sea Surface Temperature'
            }]
          },
          'V100003-EDSC': {
            conceptId: 'V100003-EDSC',
            definition: 'sea_ice_fraction in units of fraction (between 0 ',
            longName: 'sea_ice_fraction',
            name: 'sea_ice_fraction',
            nativeId: 'e2eTestVarHiRes3',
            scienceKeywords: [{
              category: 'Earth Science',
              topic: 'Oceans',
              term: 'Ocean Temperature',
              variableLevel1: 'Sea Surface Temperature'
            }]
          }
        }
      }
    })
  })
})
