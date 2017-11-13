import _ from 'lodash';
import React, { ComponentClass, SFC } from 'react';
import styled from 'styled-components';
import TreeNode from '../../containers/shared/TreeNode';

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export interface TreeViewProps {
  context: string;
  path?: string[];
  depth?: number;
  nodeIds: string[];
  NodeContent: ComponentClass<{data: any}>;
}

export const TreeView: SFC<TreeViewProps> = ({ context, path, depth, nodeIds, NodeContent }) => (
  <List>
    {nodeIds.map(nodeId => (
      <TreeNode
        key={nodeId}
        context={context}
        path={path ? _.concat(path, nodeId) : [nodeId]}
        depth={depth !== undefined ? depth + 1 : 0}
        Content={NodeContent}
      />
    ))}
  </List>
);
