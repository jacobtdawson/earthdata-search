import React from 'react'

import {
  render,
  screen,
  waitFor
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import '@testing-library/jest-dom'

import { AccessMethod } from '../AccessMethod'

beforeEach(() => {
  jest.clearAllMocks()
})

const mockEchoForm = jest.fn(() => (
  <div>
    mock echo-form
  </div>
))
jest.mock('../EchoForm', () => mockEchoForm)

const setup = (overrideProps) => {
  const onSelectAccessMethod = jest.fn()
  const onSetActivePanel = jest.fn()
  const onUpdateAccessMethod = jest.fn()

  const props = {
    accessMethods: {},
    index: 0,
    isActive: true,
    metadata: {},
    shapefileId: null,
    spatial: {},
    temporal: {},
    ursProfile: {},
    overrideTemporal: {},
    onSelectAccessMethod,
    onSetActivePanel,
    onUpdateAccessMethod,
    selectedAccessMethod: '',
    ...overrideProps
  }

  render(<AccessMethod {...props} />)

  return {
    onSelectAccessMethod,
    onSetActivePanel,
    onUpdateAccessMethod
  }
}

describe('AccessMethod component', () => {
  describe('handleAccessMethodSelection', () => {
    test('updates the selected access method', async () => {
      const user = userEvent.setup()
      const collectionId = 'collectionId'
      const { onSelectAccessMethod } = setup({
        accessMethods: {
          download: {
            isValid: true,
            type: 'download'
          }
        },
        metadata: {
          conceptId: collectionId,
          granule_count: 10000
        },
        granuleMetadata: {
          hits: 3800
        }
      })
      const directDownloadAccessMethodRadioButton = screen.getByRole('radio')
      await user.click(directDownloadAccessMethodRadioButton)

      expect(onSelectAccessMethod).toHaveBeenCalledTimes(1)
      expect(onSelectAccessMethod).toHaveBeenCalledWith({
        collectionId,
        selectedAccessMethod: 'download'
      })
    })

    describe('handleAccessMethodSelection', () => {
      test('when there is no access method', async () => {
        const collectionId = 'collectionId'
        setup({
          accessMethods: {
          },
          metadata: {
            conceptId: collectionId,
            granule_count: 10000
          },
          granuleMetadata: {
            hits: 3800
          }
        })

        const noAccessMethodAlert = screen.getByText('No access methods exist for this collection.')
        expect(noAccessMethodAlert).toBeInTheDocument()
      })
    })

    test('updates the selected access method when type is orderable', async () => {
      const user = userEvent.setup()
      const collectionId = 'collectionId'
      const { onSelectAccessMethod } = setup({
        accessMethods: {
          esi0: {
            isValid: true,
            type: 'ESI'
          }
        },
        metadata: {
          conceptId: collectionId,
          granule_count: 10000
        },
        granuleMetadata: {
          hits: 3800
        }
      })

      const directDownloadAccessMethodRadioButton = screen.getByRole('radio')
      await user.click(directDownloadAccessMethodRadioButton)
      expect(onSelectAccessMethod).toHaveBeenCalledTimes(1)

      // Multiple `ESI` services are possible for a collection
      expect(onSelectAccessMethod).toHaveBeenCalledWith({
        collectionId,
        selectedAccessMethod: 'esi0'
      })
    })
  })

  describe('radio button display', () => {
    test('renders a radio button for download', () => {
      setup({
        accessMethods: {
          download: {
            isValid: true,
            type: 'download'
          }
        }
      })

      const directDownloadAccessMethodRadioButton = screen.getByRole('radio')
      expect(directDownloadAccessMethodRadioButton.value).toEqual('download')
    })

    test('renders a radio button for echo orders', () => {
      setup({
        accessMethods: {
          echoOrder0: {
            isValid: true,
            type: 'ECHO ORDERS'
          }
        }
      })

      const directDownloadAccessMethodRadioButton = screen.getByRole('radio')
      expect(directDownloadAccessMethodRadioButton.value).toEqual('echoOrder0')
    })

    test('renders a radio button for esi', () => {
      setup({
        accessMethods: {
          esi: {
            isValid: true,
            type: 'ESI'
          }
        }
      })

      const directDownloadAccessMethodRadioButton = screen.getByRole('radio')
      expect(directDownloadAccessMethodRadioButton.value).toEqual('esi')
    })

    test('renders a radio button for opendap', () => {
      setup({
        accessMethods: {
          opendap: {
            isValid: true,
            type: 'OPeNDAP'
          }
        }
      })

      const directDownloadAccessMethodRadioButton = screen.getByRole('radio')
      expect(directDownloadAccessMethodRadioButton.value).toEqual('opendap')
    })

    test('renders a radio button for harmony', () => {
      setup({
        accessMethods: {
          harmony0: {
            isValid: true,
            type: 'Harmony'
          }
        }
      })

      const directDownloadAccessMethodRadioButton = screen.getByRole('radio')
      // Multiple `Harmony` services are possible for a collection
      expect(directDownloadAccessMethodRadioButton.value).toEqual('harmony0')
    })
  })

  describe('when the selected access method has an echoform', () => {
    test('lazy loads the echo-forms component and provides the correct fallback', async () => {
      const collectionId = 'collectionId'
      const form = 'mock-form'
      setup({
        accessMethods: {
          echoOrder0: {
            isValid: true,
            type: 'ECHO ORDERS',
            form
          }
        },
        metadata: {
          conceptId: collectionId
        },
        selectedAccessMethod: 'echoOrder0'
      })

      // Spinner up before the lazy loaded component has completed loading
      expect(screen.getByTestId('access-method-echoform-spinner')).toBeInTheDocument()

      // Wait for the lazy loaded component to load with the mocked implementation
      await waitFor(() => expect(screen.getByText('mock echo-form')).toBeInTheDocument())
    })

    test('renders an echoform', async () => {
      const collectionId = 'collectionId'
      const form = 'echo form here'

      setup({
        accessMethods: {
          echoOrder0: {
            isValid: true,
            type: 'ECHO ORDERS',
            form
          }
        },
        metadata: {
          conceptId: collectionId
        },
        selectedAccessMethod: 'echoOrder0'
      })

      const echoOrderInput = screen.getByRole('radio')
      expect(echoOrderInput.value).toEqual('echoOrder0')
    })

    test('renders an echoform with saved fields', async () => {
      const collectionId = 'collectionId'
      const form = 'echo-form-mock'
      const rawModel = 'saved fields'

      setup({
        accessMethods: {
          echoOrder0: {
            isValid: true,
            type: 'ECHO ORDERS',
            form,
            rawModel
          }
        },
        metadata: {
          conceptId: collectionId
        },
        selectedAccessMethod: 'echoOrder0'
      })

      await waitFor(() => expect(mockEchoForm).toHaveBeenCalledTimes(1))

      // Needed JSON.stringify to compare object references
      expect(JSON.stringify(mockEchoForm.mock.calls[0][0])).toEqual(JSON.stringify({
        collectionId: 'collectionId',
        form: 'echo-form-mock',
        methodKey: 'echoOrder0',
        onUpdateAccessMethod: jest.fn(),
        rawModel: 'saved fields',
        shapefileId: null,
        spatial: {},
        temporal: {},
        ursProfile: {}
      }, {}))
    })
  })

  describe('when the selected access method is opendap', () => {
    test('selecting a output format calls onUpdateAccessMethod', async () => {
      const user = userEvent.setup()
      const collectionId = 'collectionId'
      const { onUpdateAccessMethod } = setup({
        accessMethods: {
          opendap: {
            isValid: true,
            type: 'OPeNDAP',
            supportedOutputFormats: ['NETCDF-3', 'NETCDF-4']
          }
        },
        metadata: {
          conceptId: collectionId
        },
        selectedAccessMethod: 'opendap'
      })

      await user.selectOptions(
        screen.getByTestId('access-methods__output-format-options'),
        screen.getByRole('option', { name: 'NETCDF-4' })
      )

      expect(screen.getByRole('option', { name: 'NETCDF-4' }).selected).toBe(true)
      expect(onUpdateAccessMethod).toHaveBeenCalledTimes(1)
      expect(onUpdateAccessMethod).toHaveBeenCalledWith({
        collectionId: 'collectionId',
        method: {
          opendap: {
            selectedOutputFormat: 'nc4'
          }
        }
      })
    })
  })

  describe('when the selected access method is harmony', () => {
    describe('when supportedOutputFormats does not exist', () => {
      test('does not display outputFormat field', () => {
        const collectionId = 'collectionId'
        setup({
          accessMethods: {
            harmony0: {
              isValid: true,
              type: 'Harmony'
            }
          },
          metadata: {
            conceptId: collectionId
          },
          selectedAccessMethod: 'harmony0'
        })

        expect(screen.getByText('No customization options are available for the selected access method.')).toBeInTheDocument()
        expect(screen.queryByTestId('access-methods__output-format-options')).toBeNull()
      })
    })

    describe('when supportedOutputFormats exist', () => {
      test('displays outputFormat field', () => {
        const collectionId = 'collectionId'
        setup({
          accessMethods: {
            harmony0: {
              isValid: true,
              type: 'Harmony',
              supportedOutputFormats: ['NETCDF-3', 'NETCDF-4']
            }
          },
          metadata: {
            conceptId: collectionId
          },
          selectedAccessMethod: 'harmony0'
        })

        expect(screen.getByText('Choose from output format options like GeoTIFF, NETCDF, and other file types.')).toBeInTheDocument()
        expect(screen.queryByTestId('access-methods__output-format-options')).toBeInTheDocument()
      })

      test('selecting a output format calls onUpdateAccessMethod', async () => {
        const user = userEvent.setup()
        const collectionId = 'collectionId'
        const { onUpdateAccessMethod } = setup({
          accessMethods: {
            harmony0: {
              isValid: true,
              type: 'Harmony',
              supportedOutputFormats: ['NETCDF-3', 'NETCDF-4']
            }
          },
          metadata: {
            conceptId: collectionId
          },
          selectedAccessMethod: 'harmony0'
        })
        await user.selectOptions(
          screen.getByTestId('access-methods__output-format-options'),
          screen.getByRole('option', { name: 'NETCDF-4' })
        )

        expect(screen.getByRole('option', { name: 'NETCDF-4' }).selected).toBe(true)
        expect(onUpdateAccessMethod).toHaveBeenCalledTimes(1)
        expect(onUpdateAccessMethod).toHaveBeenCalledWith({
          collectionId: 'collectionId',
          method: {
            harmony0: {
              selectedOutputFormat: 'application/x-netcdf4'
            }
          }
        })
      })
    })

    describe('when supportedOutputProjections do not exist', () => {
      test('does not display outputFormat field', () => {
        const collectionId = 'collectionId'
        setup({
          accessMethods: {
            harmony0: {
              isValid: true,
              type: 'Harmony'
            }
          },
          metadata: {
            conceptId: collectionId
          },
          selectedAccessMethod: 'harmony0'
        })

        expect(screen.getByText('No customization options are available for the selected access method.')).toBeInTheDocument()
        expect(screen.queryByTestId('access-methods__output-projection-options')).toBeNull()
      })
    })

    describe('when supportedOutputProjections exist', () => {
      test('displays outputProjection field', () => {
        const collectionId = 'collectionId'
        setup({
          accessMethods: {
            harmony0: {
              isValid: true,
              type: 'Harmony',
              supportedOutputProjections: ['EPSG:4326']
            }
          },
          metadata: {
            conceptId: collectionId
          },
          selectedAccessMethod: 'harmony0'
        })

        expect(screen.getByText('Choose a desired output projection from supported EPSG Codes.')).toBeInTheDocument()
        expect(screen.queryByTestId('access-methods__output-projection-options')).toBeInTheDocument()
      })

      test('selecting a output projection calls onUpdateAccessMethod', async () => {
        const user = userEvent.setup()
        const collectionId = 'collectionId'
        const { onUpdateAccessMethod } = setup({
          accessMethods: {
            harmony0: {
              isValid: true,
              type: 'Harmony',
              supportedOutputProjections: ['EPSG:4326']
            }
          },
          metadata: {
            conceptId: collectionId
          },
          selectedAccessMethod: 'harmony0'
        })

        await user.selectOptions(
          screen.getByTestId('access-methods__output-projection-options'),
          screen.getByRole('option', { name: 'EPSG:4326' })
        )

        expect(screen.getByRole('option', { name: 'EPSG:4326' }).selected).toBe(true)
        expect(onUpdateAccessMethod).toHaveBeenCalledTimes(1)
        expect(onUpdateAccessMethod).toHaveBeenCalledWith({
          collectionId: 'collectionId',
          method: {
            harmony0: {
              selectedOutputProjection: 'EPSG:4326'
            }
          }
        })
      })
    })

    describe('when temporal subsetting is not supported', () => {
      describe('when a temporal range is not set', () => {
        test('does not display the temporal subsetting input', () => {
          const collectionId = 'collectionId'
          setup({
            accessMethods: {
              harmony0: {
                isValid: true,
                type: 'Harmony',
                supportsTemporalSubsetting: false
              }
            },
            metadata: {
              conceptId: collectionId
            },
            selectedAccessMethod: 'harmony0'
          })

          // Ensure that `Temporal` is not being rendered on the DOM
          expect(screen.queryByText('Temporal')).toBeNull()
        })
      })

      describe('when a temporal range is set', () => {
        test('does not display the temporal subsetting input', () => {
          const collectionId = 'collectionId'
          setup({
            accessMethods: {
              harmony0: {
                isValid: true,
                type: 'Harmony',
                supportsTemporalSubsetting: false
              }
            },
            metadata: {
              conceptId: collectionId
            },
            selectedAccessMethod: 'harmony0',
            temporal: {
              startDate: '2008-06-27T00:00:00.979Z',
              endDate: '2021-08-01T23:59:59.048Z',
              isRecurring: false
            }
          })

          expect(screen.queryByText('Temporal')).toBeNull()
        })
      })
    })

    describe('when temporal subsetting is supported', () => {
      describe('when a temporal range is not set', () => {
        test('displays a message about temporal subsetting', () => {
          const collectionId = 'collectionId'
          setup({
            accessMethods: {
              harmony0: {
                isValid: true,
                type: 'Harmony',
                supportsTemporalSubsetting: true
              }
            },
            metadata: {
              conceptId: collectionId
            },
            selectedAccessMethod: 'harmony0'
          })

          expect(screen.getByText('No temporal range selected. Make a temporal selection to enable temporal subsetting.')).toBeInTheDocument()
        })
      })

      describe('when a temporal range is set', () => {
        test('displays a checkbox input', () => {
          const collectionId = 'collectionId'
          setup({
            accessMethods: {
              harmony0: {
                isValid: true,
                type: 'Harmony',
                supportsTemporalSubsetting: true
              }
            },
            metadata: {
              conceptId: collectionId
            },
            selectedAccessMethod: 'harmony0',
            temporal: {
              startDate: '2008-06-27T00:00:00.979Z',
              endDate: '2021-08-01T23:59:59.048Z',
              isRecurring: false
            }
          })

          // One single temporal subsetting selection
          expect(screen.getAllByRole('checkbox').length).toEqual(1)
        })

        test('displays the correct selected temporal range', () => {
          const collectionId = 'collectionId'
          setup({
            accessMethods: {
              harmony0: {
                isValid: true,
                type: 'Harmony',
                supportsTemporalSubsetting: true
              }
            },
            metadata: {
              conceptId: collectionId
            },
            selectedAccessMethod: 'harmony0',
            temporal: {
              startDate: '2008-06-27T00:00:00.979Z',
              endDate: '2021-08-01T23:59:59.048Z',
              isRecurring: false
            }
          })

          expect(screen.getByText('Selected Range:2008-06-27 00:00:00 to 2021-08-01 23:59:59')).toBeInTheDocument()
        })

        describe('when only an start date is set', () => {
          test('displays the correct selected temporal range', () => {
            const collectionId = 'collectionId'
            setup({
              accessMethods: {
                harmony0: {
                  isValid: true,
                  type: 'Harmony',
                  supportsTemporalSubsetting: true
                }
              },
              metadata: {
                conceptId: collectionId
              },
              selectedAccessMethod: 'harmony0',
              temporal: {
                startDate: '2008-06-27T00:00:00.979Z',
                isRecurring: false
              }
            })

            expect(screen.getByText('Selected Range:2008-06-27 00:00:00 ongoing')).toBeInTheDocument()
          })

          describe('when only an end date is set', () => {
            test('displays the correct selected temporal range', () => {
              const collectionId = 'collectionId'
              setup({
                accessMethods: {
                  harmony0: {
                    isValid: true,
                    type: 'Harmony',
                    supportsTemporalSubsetting: true
                  }
                },
                metadata: {
                  conceptId: collectionId
                },
                selectedAccessMethod: 'harmony0',
                temporal: {
                  endDate: '2008-06-27T00:00:00.979Z',
                  isRecurring: false
                }
              })

              expect(screen.getByText('Selected Range:Up to 2008-06-27 00:00:00')).toBeInTheDocument()
            })
          })
        })
      })

      describe('when the temporal selection is recurring', () => {
        test('sets the checkbox unchecked', () => {
          const collectionId = 'collectionId'
          setup({
            accessMethods: {
              harmony0: {
                isValid: true,
                type: 'Harmony',
                supportsTemporalSubsetting: true
              }
            },
            metadata: {
              conceptId: collectionId
            },
            selectedAccessMethod: 'harmony0',
            temporal: {
              startDate: '2008-06-27T00:00:00.979Z',
              endDate: '2021-08-01T23:59:59.048Z',
              recurringDayStart: 0,
              recurringDayEnd: 10,
              isRecurring: true
            }
          })

          expect(screen.getByRole('checkbox').checked).toEqual(false)
        })

        test('sets the checkbox disabled', () => {
          const collectionId = 'collectionId'
          setup({
            accessMethods: {
              harmony0: {
                isValid: true,
                type: 'Harmony',
                supportsTemporalSubsetting: true
              }
            },
            metadata: {
              conceptId: collectionId
            },
            selectedAccessMethod: 'harmony0',
            temporal: {
              startDate: '2008-06-27T00:00:00.979Z',
              endDate: '2021-08-01T23:59:59.048Z',
              recurringDayStart: 0,
              recurringDayEnd: 10,
              isRecurring: true
            }
          })

          expect(screen.getByRole('checkbox').disabled).toEqual(true)
        })

        test('sets a warning in the section', () => {
          setup({
            accessMethods: {
              harmony0: {
                isValid: true,
                type: 'Harmony',
                supportsTemporalSubsetting: true
              }
            },
            metadata: {
              conceptId: 'collectionId'
            },
            selectedAccessMethod: 'harmony0',
            temporal: {
              startDate: '2008-06-27T00:00:00.979Z',
              endDate: '2021-08-01T23:59:59.048Z',
              recurringDayStart: 0,
              recurringDayEnd: 10,
              isRecurring: true
            }
          })

          expect(screen.getByText('To prevent unexpected results, temporal subsetting is not supported for recurring dates.')).toBeInTheDocument()
        })
      })

      describe('when enableTemporalSubsetting is not set', () => {
        test('defaults the checkbox checked', () => {
          const collectionId = 'collectionId'
          setup({
            accessMethods: {
              harmony0: {
                isValid: true,
                type: 'Harmony',
                supportsTemporalSubsetting: true
              }
            },
            metadata: {
              conceptId: collectionId
            },
            selectedAccessMethod: 'harmony0',
            temporal: {
              startDate: '2008-06-27T00:00:00.979Z',
              endDate: '2021-08-01T23:59:59.048Z',
              isRecurring: false
            }
          })

          expect(screen.getByRole('checkbox').checked).toEqual(true)
        })
      })

      describe('when enableTemporalSubsetting is set to true', () => {
        test('sets the checkbox checked', () => {
          const collectionId = 'collectionId'
          setup({
            accessMethods: {
              harmony0: {
                isValid: true,
                type: 'Harmony',
                supportsTemporalSubsetting: true,
                enableTemporalSubsetting: true
              }
            },
            metadata: {
              conceptId: collectionId
            },
            selectedAccessMethod: 'harmony0',
            temporal: {
              startDate: '2008-06-27T00:00:00.979Z',
              endDate: '2021-08-01T23:59:59.048Z',
              isRecurring: false
            }
          })

          expect(screen.getByRole('checkbox').checked).toEqual(true)
        })

        describe('when the user clicks the checkbox', () => {
          test('sets the checkbox checked', async () => {
            const user = userEvent.setup()
            const collectionId = 'collectionId'
            // `enableTemporalSubsetting` must be set to false here to prevent `checked` form being true
            setup({
              accessMethods: {
                harmony0: {
                  isValid: true,
                  type: 'Harmony',
                  supportsTemporalSubsetting: true,
                  enableTemporalSubsetting: false
                }
              },
              metadata: {
                conceptId: collectionId
              },
              selectedAccessMethod: 'harmony0',
              temporal: {
                startDate: '2008-06-27T00:00:00.979Z',
                endDate: '2021-08-01T23:59:59.048Z',
                isRecurring: false
              }
            })

            const checkbox = screen.getByRole('checkbox')

            // Ensure `checkbox` is false first
            expect(checkbox.checked).toEqual(false)

            await user.click(checkbox)
            expect(checkbox.checked).toEqual(true)
          })

          test('calls onUpdateAccessMethod', async () => {
            const collectionId = 'collectionId'
            const user = userEvent.setup()
            const { onUpdateAccessMethod } = setup({
              accessMethods: {
                harmony0: {
                  isValid: true,
                  type: 'Harmony',
                  supportsTemporalSubsetting: true,
                  enableTemporalSubsetting: true
                }
              },
              metadata: {
                conceptId: collectionId
              },
              selectedAccessMethod: 'harmony0',
              temporal: {
                startDate: '2008-06-27T00:00:00.979Z',
                endDate: '2021-08-01T23:59:59.048Z',
                isRecurring: false
              }
            })

            const checkbox = screen.getByRole('checkbox')

            await user.click(checkbox)
            expect(onUpdateAccessMethod).toHaveBeenCalledTimes(1)
            expect(onUpdateAccessMethod).toHaveBeenCalledWith({
              collectionId: 'collectionId',
              method: { harmony0: { enableTemporalSubsetting: false } }
            })
          })
        })
      })

      describe('when enableTemporalSubsetting is set to false', () => {
        test('sets the checkbox unchecked', () => {
          setup({
            accessMethods: {
              harmony0: {
                isValid: true,
                type: 'Harmony',
                supportsTemporalSubsetting: true,
                enableTemporalSubsetting: false
              }
            },
            metadata: {
              conceptId: 'collectionId'
            },
            selectedAccessMethod: 'harmony0',
            temporal: {
              startDate: '2008-06-27T00:00:00.979Z',
              endDate: '2021-08-01T23:59:59.048Z',
              isRecurring: false
            }
          })

          expect(screen.getByRole('checkbox').checked).toEqual(false)
        })

        describe('when enableSpatialSubsetting is set to false', () => {
          test('sets the checkbox unchecked for boundingBox', () => {
            setup({
              accessMethods: {
                harmony0: {
                  isValid: true,
                  type: 'Harmony',
                  supportsBoundingBoxSubsetting: true,
                  enableSpatialSubsetting: false
                }
              },
              metadata: {
                conceptId: 'collectionId'
              },
              selectedAccessMethod: 'harmony0',
              spatial: {
                boundingBox: ['-18.28125,-25.8845,-10.40625,-14.07468']
              }
            })

            expect(screen.getByRole('checkbox').checked).toEqual(false)
          })

          test('no area selected shows up when not passing in a spatial value', () => {
            setup({
              accessMethods: {
                harmony0: {
                  isValid: true,
                  type: 'Harmony',
                  supportsBoundingBoxSubsetting: true,
                  enableSpatialSubsetting: false
                }
              },
              metadata: {
                conceptId: 'collectionId'
              },
              selectedAccessMethod: 'harmony0',
              spatial: {}
            })

            expect(screen.getByText('No spatial area selected. Make a spatial selection to enable spatial subsetting.')).toBeInTheDocument()
          })

          test('sets the checkbox unchecked for circle', () => {
            setup({
              accessMethods: {
                harmony0: {
                  isValid: true,
                  type: 'Harmony',
                  supportsBoundingBoxSubsetting: true,
                  enableSpatialSubsetting: false
                }
              },
              metadata: {
                conceptId: 'collectionId'
              },
              selectedAccessMethod: 'harmony0',
              spatial: {
                circle: ['64.125,7.8161,983270-18.28125']
              }
            })

            expect(screen.getByRole('checkbox').checked).toEqual(false)
          })

          test('sets the checkbox unchecked for point', () => {
            setup({
              accessMethods: {
                harmony0: {
                  isValid: true,
                  type: 'Harmony',
                  supportsBoundingBoxSubsetting: true,
                  enableSpatialSubsetting: false
                }
              },
              metadata: {
                conceptId: 'collectionId'
              },
              selectedAccessMethod: 'harmony0',
              spatial: {
                point: ['82.6875,-18.61541']
              }
            })

            expect(screen.getByRole('checkbox').checked).toEqual(false)
          })

          test('sets the checkbox unchecked for line', () => {
            setup({
              accessMethods: {
                harmony0: {
                  isValid: true,
                  type: 'Harmony',
                  supportsBoundingBoxSubsetting: true,
                  enableSpatialSubsetting: false
                }
              },
              metadata: {
                conceptId: 'collectionId'
              },
              selectedAccessMethod: 'harmony0',
              spatial: {
                line: ['82.6875,-18.61541,83.1231, -16.11311']
              }
            })

            expect(screen.getByRole('checkbox').checked).toEqual(false)
          })

          test('sets the checkbox unchecked for shapefile', () => {
            setup({
              accessMethods: {
                harmony0: {
                  isValid: true,
                  type: 'Harmony',
                  supportsShapefileSubsetting: true,
                  supportsBoundingBoxSubsetting: false,
                  enableSpatialSubsetting: false
                }
              },
              metadata: {
                conceptId: 'collectionId'
              },
              selectedAccessMethod: 'harmony0',
              spatial: {
                polygon: ['104.625,-10.6875,103.11328,-10.89844,103.57031,-12.19922,105.32813,-13.11328,106.38281,-11.70703,105.75,-10.33594,104.625,-10.6875']
              }
            })

            expect(screen.getByRole('checkbox').checked).toEqual(false)
          })
        })

        describe('when the user clicks the checkbox', () => {
          test('sets the checkbox for temporal unchecked', async () => {
            const user = userEvent.setup()
            const collectionId = 'collectionId'
            setup({
              accessMethods: {
                harmony0: {
                  isValid: true,
                  type: 'Harmony',
                  supportsTemporalSubsetting: true,
                  enableTemporalSubsetting: true
                }
              },
              metadata: {
                conceptId: collectionId
              },
              selectedAccessMethod: 'harmony0',
              temporal: {
                startDate: '2008-06-27T00:00:00.979Z',
                endDate: '2021-08-01T23:59:59.048Z',
                isRecurring: false
              }
            })

            const checkbox = screen.getByRole('checkbox')
            expect(checkbox.checked).toEqual(true)
            await user.click(checkbox)
            expect(screen.getByRole('checkbox').checked).toEqual(false)
          })

          test('sets the checkbox for spatial checked', async () => {
            const user = userEvent.setup()
            const collectionId = 'collectionId'
            setup({
              accessMethods: {
                harmony0: {
                  isValid: true,
                  type: 'Harmony',
                  supportsBoundingBoxSubsetting: true,
                  enableSpatialSubsetting: false
                }
              },
              metadata: {
                conceptId: collectionId
              },
              selectedAccessMethod: 'harmony0',
              spatial: {
                boundingBox: ['-18.28125,-25.8845,-10.40625,-14.07468']
              }
            })

            const checkbox = screen.getByRole('checkbox')
            await user.click(checkbox)
            expect(screen.getByRole('checkbox').checked).toEqual(true)
          })

          test('calls onUpdateAccessMethod', async () => {
            const user = userEvent.setup()
            const collectionId = 'collectionId'
            const { onUpdateAccessMethod } = setup({
              accessMethods: {
                harmony0: {
                  isValid: true,
                  type: 'Harmony',
                  supportsTemporalSubsetting: true,
                  enableTemporalSubsetting: true
                }
              },
              metadata: {
                conceptId: collectionId
              },
              selectedAccessMethod: 'harmony0',
              temporal: {
                startDate: '2008-06-27T00:00:00.979Z',
                endDate: '2021-08-01T23:59:59.048Z',
                isRecurring: false
              }
            })
            const checkbox = screen.getByRole('checkbox')
            await user.click(checkbox)
            expect(onUpdateAccessMethod).toHaveBeenCalledTimes(1)
            expect(onUpdateAccessMethod).toHaveBeenCalledWith({
              collectionId: 'collectionId',
              method: { harmony0: { enableTemporalSubsetting: false } }
            })
          })
        })
      })
    })

    describe('when a service name is passed in', () => {
      describe('when the service type is `OPeNDAP`', () => {
        test('the service name is rendered on the panel without needing to click `More Info`', () => {
          const serviceName = 'opendap-service-name'
          setup({
            accessMethods: {
              opendap: {
                isValid: true,
                type: 'OPeNDAP',
                name: serviceName
              }
            }
          })

          expect(screen.getByText('opendap-service-name')).toBeInTheDocument()
        })
      })

      describe('when the service type is `Harmony`', () => {
        test('the service name is rendered on the panel without needing to click `More Info`', () => {
          const collectionId = 'collectionId'
          const serviceName = 'harmony-service-name'
          setup({
            accessMethods: {
              harmony0: {
                isValid: true,
                type: 'Harmony',
                name: serviceName
              }
            },
            metadata: {
              conceptId: collectionId
            }
          })

          expect(screen.getByText(/using the harmony-service-name/)).toBeInTheDocument()
        })
      })
    })
  })
})
