import React, { Component, ComponentType } from 'react';
import { DefaultArrow } from './DefaultArrow';
import { TreeView } from './TreeView';
import { FlatTreeNode, FlatTreeNodes, TreeNodes } from './types';

interface TreeViewContainerProps<T> {
  Arrow?: ComponentType<{ expanded: boolean }>;
  nodes: TreeNodes<T>;
}

export class TreeViewContainer<T extends {}> extends Component<TreeViewContainerProps<T>> {
  flatten = (roots: TreeNodes<T> = [], depth: number = 0): FlatTreeNodes<T> => {
    return roots.reduce((flattened, node) => {
      const flatNode: FlatTreeNode<T> = Object.assign({}, node, { depth, children: undefined });
      const flatDescendants = this.flatten(node.children, depth + 1);
      flatNode.next = node.children ? flatDescendants.length + 1 : undefined;
      return flattened.concat(flatNode).concat(flatDescendants);
    }, []);
  };

  render() {
    const { Arrow = DefaultArrow, nodes } = this.props;
    const flatNodes = this.flatten(nodes);
    return <TreeView Arrow={Arrow} nodes={flatNodes} />;
  }
}
