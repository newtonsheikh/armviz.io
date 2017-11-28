import React, { SFC } from 'react';
import { Collapse } from '../../shared/collapse/index';
import { TreeView } from '../../shared/tree-view';
// import { ToolboxItem } from '../toolbox-item/index';

const ToolboxItem: SFC<{ data: string; className: string }> = ({ className }) => (
  <div className={className}>foobar</div>
);

export interface ToolboxGroupProps {
  name: string;
  rootIds: string[];
}

export const ToolboxGroup: SFC<ToolboxGroupProps> = ({ name, rootIds }) => (
  <Collapse namespace={['toolbox', 'groups']} id={name} title={name}>
    <TreeView
      namespace={['toolbox', 'groups', name, 'items']}
      depth={1}
      nodeIds={rootIds}
      NodeContent={ToolboxItem}
    />
  </Collapse>
);
