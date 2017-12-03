import { RootState } from '../components/app';

export const rootState: RootState = {
  toolbox: {
    filter: {
      category: 'All',
      text: ''
    },
    groups: {
      Compute: {
        rootIds: ['1', '2', '3', '4', '5', '7', '9'],
        expanded: true,
        items: {
          1: {
            id: '1',
            data: {
              resourceName: 'Availability Sets'
            }
          },
          2: {
            id: '2',
            data: {
              resourceName: 'Disks'
            }
          },
          3: {
            id: '3',
            data: {
              resourceName: 'Images'
            }
          },
          4: {
            id: '4',
            data: {
              resourceName: 'Snapshots'
            }
          },
          5: {
            id: '5',
            data: {
              resourceName: 'Virtual Machines'
            },
            childIds: ['6'],
            expanded: false
          },
          6: {
            id: '6',
            data: {
              resourceName: 'Extensions'
            }
          },
          7: {
            id: '7',
            data: {
              resourceName: 'Virtual Machine Scale Sets'
            },
            childIds: ['8'],
            expanded: false
          },
          8: {
            id: '8',
            data: {
              resourceName: 'Extensions'
            }
          },
          9: {
            id: '9',
            data: {
              resourceName: 'App Service'
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
              resourceName: 'Availability Sets'
            }
          },
          2: {
            id: '2',
            data: {
              resourceName: 'Disks'
            }
          },
          3: {
            id: '3',
            data: {
              resourceName: 'Images'
            }
          },
          4: {
            id: '4',
            data: {
              resourceName: 'Snapshots'
            }
          },
          5: {
            id: '5',
            data: {
              resourceName: 'Virtual Machines'
            },
            childIds: ['6'],
            expanded: false
          },
          6: {
            id: '6',
            data: {
              resourceName: 'Extensions'
            }
          },
          7: {
            id: '7',
            data: {
              resourceName: 'Virtual Machine Scale Sets'
            },
            childIds: ['8'],
            expanded: false
          },
          8: {
            id: '8',
            data: {
              resourceName: 'Extensions'
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
              resourceName: 'Availability Sets'
            }
          },
          2: {
            id: '2',
            data: {
              resourceName: 'Disks'
            }
          },
          3: {
            id: '3',
            data: {
              resourceName: 'Images'
            }
          },
          4: {
            id: '4',
            data: {
              resourceName: 'Snapshots'
            }
          },
          5: {
            id: '5',
            data: {
              resourceName: 'Virtual Machines'
            },
            expanded: false
          }
        }
      }
    }
  }
};
