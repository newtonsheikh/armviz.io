import React, { Component, ComponentType } from 'react';
import styled from 'styled-components';
import { TreeItem } from './TreeItem';
import { FlatTreeNodes } from './types';

interface TreeViewProps<T> {
  Arrow?: ComponentType<{ expanded: boolean }>;
  nodes: FlatTreeNodes<T>;
}

interface TreeViewState {
  expandedIndices: Set<number>;
}

const TreeViewWrapper = styled.ul`
  flex-grow: 1;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export class TreeView<T> extends Component<TreeViewProps<T>, TreeViewState> {
  constructor(props: TreeViewProps<T>) {
    super(props);
    this.state = this.initState(props.nodes);
  }

  componentWillReceiveProps(nextProps: TreeViewProps<T>) {
    this.setState(this.initState(nextProps.nodes));
  }

  initState = (nodes: FlatTreeNodes<T>) => {
    const expandedIndices = new Set<number>();
    for (let index = 0; index < nodes.length; index++) {
      if (nodes[index].expanded) {
        expandedIndices.add(index);
      }
    }
    return { expandedIndices };
  };

  nodeExpanded = (index: number) => {
    return this.state.expandedIndices.has(index);
  };

  handleToggle = (index: number) => {
    this.setState(prevState => {
      const expandedIndices = new Set(prevState.expandedIndices);
      if (expandedIndices.has(index)) {
        expandedIndices.delete(index);
      } else {
        expandedIndices.add(index);
      }
      return { expandedIndices };
    });
  };

  renderTreeItems = () => {
    const { nodeExpanded, handleToggle } = this;
    const { Arrow, nodes } = this.props;
    const treeItems = [];

    for (let index = 0; index < nodes.length; ) {
      const node = nodes[index];
      const leaf = node.next === undefined;
      const expanded = nodeExpanded(index);
      treeItems.push(
        <TreeItem
          key={index}
          index={index}
          depth={node.depth}
          expanded={expanded}
          leaf={leaf}
          data={node}
          Arrow={Arrow}
          onToggle={handleToggle}
        />
      );
      index += !leaf && !expanded ? node.next : 1;
    }

    return treeItems;
  };

  render() {
    const { renderTreeItems } = this;
    return <TreeViewWrapper>{renderTreeItems()}</TreeViewWrapper>;
  }
}
