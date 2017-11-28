import { RootState } from '../components/app';

export const rootState: RootState = {
  toolboxItems: {
    1: {
      id: '1',
      data: {
        resourceName: 'Compute'
      },
      expanded: true,
      childIds: ['2', '3']
    },
    2: {
      id: '2',
      data: {
        resourceName: 'Parent Resource'
      },
      childIds: ['4', '7', '8']
    },
    3: {
      id: '3',
      data: {
        resourceName: 'Virtual Machine'
      }
    },
    4: {
      id: '4',
      data: {
        resourceName: 'Child Resource 1'
      }
    },
    7: {
      id: '7',
      data: {
        resourceName: 'Child Resource 2'
      }
    },
    8: {
      id: '8',
      data: {
        resourceName: 'Child Resource 3'
      },
      childIds: ['9', '10']
    },
    9: {
      id: '9',
      data: {
        resourceName: 'Child Resource 3.1'
      }
    },
    10: {
      id: '10',
      data: {
        resourceName: 'Child Resource 3.2'
      }
    },
    5: {
      id: '5',
      data: {
        resourceName: 'Networks'
      },
      childIds: ['6']
    },
    6: {
      id: '6',
      data: {
        resourceName: 'Subnet'
      }
    }
  },
  toolboxGroups: {
    Compute: {
      expanded: true
    }
  }
};
