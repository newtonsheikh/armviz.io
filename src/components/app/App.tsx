import React, { SFC } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { Collapse } from '../shared/collapse';
import { TreeView } from '../shared/tree-view';

const ToolboxItem: SFC<{ data: string; className: string }> = ({ className }) => (
  <div className={className}>foobar</div>
);

const App: SFC = () => (
  <Provider store={store}>
    <div>
      <TreeView namespace={'toolboxItems'} nodeIds={['1', '5']} NodeContent={ToolboxItem} />
      <Collapse namespace={'toolboxGroups'} id={'Compute'} title={'Test'}>
        <div>Some Content</div>
      </Collapse>
    </div>
  </Provider>
);

export default App;
