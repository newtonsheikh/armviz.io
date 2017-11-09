import _ from 'lodash';
import React, { SFC } from 'react';
import styled from 'styled-components';
import TreeNode from '../../containers/tree-view/TreeNode';

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
  nodeContent: (data: any) => JSX.Element;
}

export const TreeView: SFC<TreeViewProps> = ({ context, path, depth, nodeIds, nodeContent }) => (
  <List>
    {nodeIds.map(nodeId => (
      <TreeNode
        key={nodeId}
        context={context}
        path={path ? _.concat(path, nodeId) : [nodeId]}
        depth={depth !== undefined ? depth + 1 : 0}
        content={nodeContent}
      />
    ))}
  </List>
);
