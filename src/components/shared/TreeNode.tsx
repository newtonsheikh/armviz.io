import _ from 'lodash';
import React, { ComponentClass, SFC } from 'react';
import styled from 'styled-components';
import { Caret } from './Caret';
import { TreeView } from './TreeView';

const NodeWrapper = styled.div`
  position: relative;
  user-select: none;
  &:hover {
    background-color: #efefef;
  }
`;

const ListItem = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export interface TreeNodeProps {
  context: string;
  path: string[];
  depth: number;
  data: any;
  Content: ComponentClass<{ data: any }>;
  expanded?: boolean;
  childIds?: string[];
  toggle: (context: string, nodeId: string) => any;
}

export const TreeNode: SFC<TreeNodeProps> = ({ context, path, depth, data, Content, expanded, childIds, toggle }) => {
  const nodeId = _.last(path);

  const CaretWrapper = styled.div`
    position: absolute;
    left: ${depth * 12 + 3 + 'px'};
    height: 100%;
    cursor: pointer;
  `;

  const StyledContent = styled(Content) `
    padding: 3px 0;
    padding-left: ${depth * 12 + 18 + 'px'};
  `;

  const renderNode = () => (
    <NodeWrapper>
      <CaretWrapper>
        {childIds && <Caret onClick={() => toggle(context, nodeId)} expanded={expanded} />}
      </CaretWrapper>
      <StyledContent data={data} />
    </NodeWrapper>
  );

  return (
    <ListItem>
      {renderNode()}
      {childIds && expanded &&
        <TreeView
          context={context}
          path={path}
          depth={depth}
          nodeIds={childIds}
          NodeContent={Content}
        />
      }
    </ListItem>
  );
};
