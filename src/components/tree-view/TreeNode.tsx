import _ from 'lodash';
import React, { ReactInstance, SFC } from 'react';
import { ConnectDragSource, DragSource } from 'react-dnd';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';
import { withProps } from '../../utils/withProps';
import { TreeView } from './TreeView';

//#region Styled Components

const NodeWrapper = styled.div`
  position: relative;
`;

const CaretWrapper = withProps<{ depth: number }>()(styled.div) `
  position: absolute;
  left: ${props => props.depth * 12 + 'px'};
  height: 100%;
  cursor: pointer;
`;

const Caret = withProps<{ expanded?: boolean }>()(styled.svg) `
  width: 12px;
  height: 100%;
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
  Content: SFC<{ data: any }>;
  expanded?: boolean;
  childIds?: string[];
  connectDragSource?: ConnectDragSource;
  toggle: (context: string, nodeId: string) => any;
}

const TreeNode: SFC<TreeNodeProps> = ({
  context, path, depth, data, Content, expanded, childIds, connectDragSource, toggle
}) => {
  const nodeId = _.last(path);

  const StyledContent = styled(Content) `
    padding: 3px 0;
    padding-left: ${depth * 12 + 15 + 'px'};
    user-select: none;
    &:hover {
      background-color: #efefef;
    }
  `;

  const handleClick = () => {
    if (childIds) {
      toggle(context, nodeId);
    }
  };

  const renderNode = () => (
    <NodeWrapper ref={(el: ReactInstance) => connectDragSource(findDOMNode(el) as any)} >
      <CaretWrapper depth={depth} onClick={handleClick}>
        {childIds && !expanded && <Caret viewBox="0 0 12 12"><path d="M 4 2.5 V 9.5 L 8 6 Z" /></Caret>}
        {childIds && expanded && <Caret expanded viewBox="0 0 12 12"><path d="M 8 3.5 V 9 H 3 Z" /></Caret>}
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
