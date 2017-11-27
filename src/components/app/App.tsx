import React, { SFC } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { TreeView } from '../shared/tree-view';

const ToolboxItem: SFC<{ data: string; className: string }> = ({ className }) => (
  <div className={className}>foobar</div>
);

const App: SFC = () => (
  <Provider store={store}>
    <TreeView
      namespace={'toolboxItems'}
      nodeIds={['1', '5']}
      NodeContent={ToolboxItem}
    />
  </Provider>
);

export default App;
