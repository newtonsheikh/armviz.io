import React, { Component, ComponentType } from 'react';
import styled from 'styled-components';

interface TreeItemProps<T> {
  index: number;
  data: T;
  depth: number;
  leaf: boolean;
  expanded?: boolean;
  Arrow?: ComponentType<{ expanded: boolean }>;
  Content?: ComponentType<T>;
  onToggle?: (index: number) => any;
}

const TreeItemWrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  list-style-type: none;
  margin: 0;
  padding: 0;
  transition: all 0.4s ease-out;
`;

const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: ${(props: { depth: number }) => props.depth * 16 + 'px'};
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  & > * {
    padding: 8px 0;
    padding-left: ${(props: { depth: number }) => props.depth * 16 + 20 + 'px'};
  }
`;

export class TreeItem<T> extends Component<TreeItemProps<T>> {
  handleClick = () => {
    this.props.onToggle(this.props.index);
  };

  render() {
    const { handleClick } = this;
    const { data, depth, leaf, expanded, Arrow, Content } = this.props;
    return (
      <TreeItemWrapper>
        {!leaf && (
          <ArrowWrapper onClick={handleClick} depth={depth}>
            <Arrow expanded={expanded} />
          </ArrowWrapper>
        )}
        <ContentWrapper depth={depth}>
          <Content {...data} />
        </ContentWrapper>
      </TreeItemWrapper>
    );
  }
}
