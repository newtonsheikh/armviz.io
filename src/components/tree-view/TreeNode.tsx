import _ from 'lodash';
import React, { ReactInstance, SFC } from 'react';
import { ConnectDragSource, DragSource } from 'react-dnd';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';
import { withProps } from '../../utils/withProps';
import { TreeView } from './TreeView';

//#region Styled Components

const NodeWrapper = withProps<{ depth: number }>()(styled.div) `
  padding: 3px;
  padding-left: ${props => props.depth * 12 + 'px;'}
  user-select: none;
  &:hover {
    background-color: #efefef;
  }
`;

const CaretWrapper = styled.div`
  display: inline-block;
  height: 100%;
  width: 12px;
  margin-left: 6px;
  margin-right: 3px;
  cursor: pointer;
`;

const Caret = withProps<{ expanded?: boolean }>()(styled.svg) `
  > path {
    stroke: gray;
    stroke-width: ${props => props.expanded ? '0.5px' : '1px'};
    stroke-linejoin: round;
    fill: ${props => props.expanded ? 'gray' : 'none'};
  }
`;

const ListItem = styled.li`
  list-style-type: none;
`;

//#endregion

export interface TreeNodeProps {
  context: string;
  path: string[];
  depth: number;
  data: any;
  content: (data: any) => JSX.Element;
  expanded?: boolean;
  childIds?: string[];
  connectDragSource?: ConnectDragSource;
  toggle: (context: string, nodeId: string) => any;
}

const TreeNode: SFC<TreeNodeProps> = ({
  context, path, depth, data, content, expanded, childIds, connectDragSource, toggle
}) => {
  const nodeId = _.last(path);

  const handleClick = () => {
    if (childIds) {
      toggle(context, nodeId);
    }
  };

  const renderNode = () => (
    <NodeWrapper depth={depth} ref={(el: ReactInstance) => connectDragSource(findDOMNode(el) as any)} >
      <CaretWrapper onClick={handleClick}>
        {childIds && !expanded && <Caret viewBox="0 0 12 12"><path d="M 4 3.5 V 10.5 L 8 7 Z" /></Caret>}
        {childIds && expanded && <Caret expanded viewBox="0 0 12 12"><path d="M 8 4 V 9.5 H 3 Z" /></Caret>}
      </CaretWrapper>
      {content(data)}
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
          nodeContent={content}
        />
      }
    </ListItem>
  );
};

const Types = {
  TREE_NODE: 'TreeNode'
};

const treeNodeSource = {
  beginDrag() {
    return {};
  }
};

function collect(conn: any, monitor: any) {
  return {
    connectDragSource: conn.dragSource(),
  };
}

export default DragSource<TreeNodeProps>(Types.TREE_NODE, treeNodeSource, collect)(TreeNode);
