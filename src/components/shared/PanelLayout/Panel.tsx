import React, { Component } from 'react';
import styled from 'styled-components';

export interface PanelProps {
  horizontal: boolean;
  initSize: number;
  size: number;
  minSize: number;
  maxSize: number;
  fixed: boolean;
  onInitSizeChanged?: (newInitSize: number) => any;
  onSizeChanged?: (width: number, height: number) => any;
}

type PanelWrapperProps = Pick<PanelProps, 'horizontal' | 'size' | 'minSize' | 'maxSize' | 'fixed'>;

const setDimensions = ({ horizontal, size, minSize, maxSize, fixed }: PanelWrapperProps) => {
  const dimension = horizontal ? 'width' : 'height';
  return `
    ${dimension}: ${fixed ? `${size}px` : 'auto'};
    min-${dimension}: ${minSize}px;
    max-${dimension}: ${maxSize === Infinity ? 'none' : `${maxSize}px`};
  `;
};

const PanelWrapper = styled.div`
  display: flex;
  flex-grow: ${({ size, fixed }) => (fixed ? 0 : size)};
  flex-basis: ${({ size, fixed }) => (fixed ? 'auto' : size + 'px')};
  ${(props: PanelWrapperProps) => setDimensions(props)};
`;

export class Panel extends Component<Partial<PanelProps>> {
  static defaultProps = {
    initSize: 1,
    size: 1,
    minSize: 4,
    maxSize: Infinity,
    fixed: false
  };

  panelElement: HTMLElement;

  componentWillReceiveProps(nextProps: Readonly<PanelProps>) {
    const { initSize, onInitSizeChanged } = this.props;
    if (initSize !== nextProps.initSize) {
      onInitSizeChanged(nextProps.initSize);
    }
  }

  render() {
    const { horizontal, size, minSize, maxSize, fixed, children } = this.props;
    return (
      <PanelWrapper
        horizontal={horizontal}
        size={size}
        minSize={minSize}
        maxSize={maxSize}
        fixed={fixed}
      >
        {children}
      </PanelWrapper>
    );
  }
}
