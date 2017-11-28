import React, { SFC } from 'react';
import { Collapse } from '../../shared/collapse/index';
import { TreeView } from '../../shared/tree-view';
import { ToolboxItem } from '../toolbox-item/index';

export interface ToolboxGroupProps {
  name: string;
  rootIds: string[];
}

export const ToolboxGroup: SFC<ToolboxGroupProps> = ({ name, rootIds }) => (
  <Collapse namespace={'toolbox.groupsByName'} id={name} title={name}>
    <TreeView
      namespace={'toolbox.groupsByName.' + name + '.itemsById'}
      nodeIds={rootIds}
      NodeContent={ToolboxItem}
    />
  </Collapse>
);
