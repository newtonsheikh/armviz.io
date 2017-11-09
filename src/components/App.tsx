import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootReducer from '../reducers';
import { TreeView } from './tree-view/TreeView';

const store = createStore(RootReducer, {
  treeView: {
    1: {
      id: '1',
      data: {
        label: 'Compute'
      },
      expanded: true,
      childIds: ['2', '3']
    },
    2: {
      id: '2',
      data: {
        label: 'Parent Resource'
      },
      childIds: ['4', '7', '8']
    },
    3: {
      id: '3',
      data: {
        label: 'Virtual Machine'
      }
    },
    4: {
      id: '4',
      data: {
        label: 'Child Resource 1'
      }
    },
    7: {
      id: '7',
      data: {
        label: 'Child Resource 2'
      }
    },
    8: {
      id: '8',
      data: {
        label: 'Child Resource 3'
      },
      childIds: ['9', '10']
    },
    9: {
      id: '9',
      data: {
        label: 'Child Resource 3.1'
      }
    },
    10: {
      id: '10',
      data: {
        label: 'Child Resource 3.2'
      }
    },
    5: {
      id: '5',
      data: {
        label: 'Networks'
      },
      childIds: ['6']
    },
    6: {
      id: '6',
      data: {
        label: 'Subnet'
      }
    }
  }
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TreeView
          context={'treeView'}
          nodeIds={['1', '5']}
          nodeContent={(data: { label: string }) => (<span>{data.label}</span>)}
        />
      </Provider>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
