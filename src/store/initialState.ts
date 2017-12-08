import { AppState } from '../components/app';
import imageURLs from '../images';

export const initialState: AppState = {
  toolbox: {
    filter: {
      category: 'All',
      text: ''
    },
    groups: {
      Compute: {
        rootIds: ['1', '2', '3', '4', '5', '7'],
        isOpen: true,
        items: {
          1: {
            id: '1',
            data: {
              label: 'Availability Sets',
              imageURL: imageURLs.availabilitySet,
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
              imageURL: imageURLs.discs,
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
              imageURL: imageURLs.discs,
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
              label: 'Snapshots',
              imageURL: imageURLs.discs,
              resource: {
                name: '',
                type: 'Micorosft.Compute/snapshot',
                apiVersion: '2017-03-30',
                location: '',
                properties: {}
              }
            }
          },
          5: {
            id: '5',
            data: {
              label: 'Virtual Machines',
              imageURL: imageURLs.virtualMachine,
              resource: {
                name: '',
                type: 'Micorosft.Compute/virtualMachine',
                apiVersion: '2017-03-30',
                location: '',
                properties: {}
              }
            },
            childIds: ['6'],
            expanded: false
          },
          6: {
            id: '6',
            data: {
              label: 'Extensions',
              imageURL: imageURLs.extensions,
              resource: {
                name: '',
                type: 'Micorosft.Compute/virtualMachines/extensions',
                apiVersion: '2017-03-30',
                location: '',
                properties: {}
              }

            }
          },
          7: {
            id: '7',
            data: {
              label: 'Virtual Machine Scale Sets',
              imageURL: imageURLs.availabilitySet,
              resource: {
                name: '',
                type: 'Micorosft.Compute/availabilitySets',
                apiVersion: '2017-03-30',
                location: '',
                properties: {}
              }
            },
            childIds: ['8'],
            expanded: false
          },
          8: {
            id: '8',
            data: {
              label: 'Extensions',
              imageURL: imageURLs.extensions,
              resource: {
                name: '',
                type: 'Micorosft.Compute/availabilitySets/extensions',
                apiVersion: '2017-03-30',
                location: '',
                properties: {}
              }

            }
          }
        }
      },
      Storage: {
        rootIds: ['1'],
        isOpen: true,
        items: {
          1: {
            id: '1',
            data: {
              label: 'Storage Account',
              imageURL: imageURLs.storage,
              resource: {
                name: '',
                type: 'Microsoft.Storage/storageAccounts',
                apiVersion: '2017-06-01',
                location: '',
                sku: {
                  name: ''
                },
                kind: '',
                properties: {}
              }
            }
          }
        }
      },
      Web: {
        rootIds: [ '1', '2' ],
        isOpen: true,
        items: {
          1: {
            id: '1',
            data: {
              label: 'Server Farms',
              imageURL: imageURLs.webHosting,
              resource: {
                name: '',
                type: 'Microsoft.Web/serverfarms',
                apiVersion: '2016-09-01'
              }
            }
          },
          2: {
            id: '2',
            data: {
              label: 'Sites',
              imageURL: imageURLs.webapp,
              resource: {
                name: '',
                type: 'Microsoft.Web/sites',
                apiVersion: '2016-08-01'
              }
            }
          },
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
