import { AppState } from '../components/app';

export const initialState: AppState = {
  toolbox: {
    filter: {
      category: 'All',
      text: ''
    },
    groups: {
      Compute: {
        rootIds: ['1', '2', '3', '4', '5', '7', '9'],
        items: {
          1: {
            id: '1',
            data: {
              label: 'Availability Sets',
              resource: {
                name: '',
                type: 'Microsoft.Compute/availabilitySets',
                apiVersion: '2017-03-03',
                location: '',
                properties: {}
              }
            }
          },
          2: {
            id: '2',
            data: {
              label: 'Disks',
              resource: {
                name: '',
                type: 'Microsoft.Compute/disks',
                apiVersion: '2017-03-30',
                location: '',
                properties: {
                  creationData: {
                    createOption: ''
                  }
                }
              }
            }
          },
          3: {
            id: '3',
            data: {
              label: 'Images',
              resource: {
                name: '',
                type: 'Micorosft.Compute/images',
                apiVersion: '2017-03-30',
                location: '',
                properties: {}
              }
            }
          },
          4: {
            id: '4',
            data: {
              label: 'Snapshots'
            }
          },
          5: {
            id: '5',
            data: {
              label: 'Virtual Machines'
            },
            childIds: ['6'],
            expanded: false
          },
          6: {
            id: '6',
            data: {
              label: 'Extensions'
            }
          },
          7: {
            id: '7',
            data: {
              label: 'Virtual Machine Scale Sets'
            },
            childIds: ['8'],
            expanded: false
          },
          8: {
            id: '8',
            data: {
              label: 'Extensions'
            }
          },
          9: {
            id: '9',
            data: {
              label: 'App Service'
            }
          }
        }
      },
      Network: {
        rootIds: ['1', '2', '3', '4', '5', '7'],
        expanded: false,
        items: {
          1: {
            id: '1',
            data: {
              label: 'Availability Sets'
            }
          },
          2: {
            id: '2',
            data: {
              label: 'Disks'
            }
          },
          3: {
            id: '3',
            data: {
              label: 'Images'
            }
          },
          4: {
            id: '4',
            data: {
              label: 'Snapshots'
            }
          },
          5: {
            id: '5',
            data: {
              label: 'Virtual Machines'
            },
            childIds: ['6'],
            expanded: false
          },
          6: {
            id: '6',
            data: {
              label: 'Extensions'
            }
          },
          7: {
            id: '7',
            data: {
              label: 'Virtual Machine Scale Sets'
            },
            childIds: ['8'],
            expanded: false
          },
          8: {
            id: '8',
            data: {
              label: 'Extensions'
            }
          }
        }
      },
      Storage: {
        rootIds: ['1', '2', '3', '4', '5'],
        expanded: false,
        items: {
          1: {
            id: '1',
            data: {
              label: 'Availability Sets'
            }
          },
          2: {
            id: '2',
            data: {
              label: 'Disks'
            }
          },
          3: {
            id: '3',
            data: {
              label: 'Images'
            }
          },
          4: {
            id: '4',
            data: {
              label: 'Snapshots'
            }
          },
          5: {
            id: '5',
            data: {
              label: 'Virtual Machines'
            },
            expanded: false
          }
        }
      }
    }
  },
  canvas: {
    elements: []
  },
  editor: {
    templateJson: [
      '{',
      '  "$schema": "http://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",',
      '  "contentVersion": "1.0.0.0",',
      '  "parameters": {},',
      '  "variables": {},',
      '  "resources": [],',
      '  "output": {}',
      '}'
    ].join('\n')
  }
};
