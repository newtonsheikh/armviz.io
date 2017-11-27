import React, { PureComponent } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { TreeView } from '../shared/TreeView';
import ToolboxItem from './ToolboxItem';

class Toolbox extends PureComponent {
  render() {
    return (
      <TreeView
        namespace={'treeView'}
        nodeIds={['1', '5']}
        NodeContent={ToolboxItem}
      />
    );
  }
}

export default DragDropContext(HTML5Backend)(Toolbox);
