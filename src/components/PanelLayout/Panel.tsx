import React, { PureComponent } from 'react';
import styled from 'styled-components';

interface PanelProps {
  index: number;
  horizontal: boolean;
  flexible: boolean;
  size: number | string;
  minSize: string;
  maxSize: string;
  innerRef?: (index: number, el: Element) => any;
}

type WrapperProps = Pick<PanelProps, 'flexible' | 'size' | 'minSize' | 'maxSize'>;

const Wrapper = styled.div`
  flex-shrink: 1;
  flex-basis: ${({ flexible, size }: WrapperProps) => (flexible ? `${size}px` : 'auto')};
  flex-grow: ${({ flexible, size }: WrapperProps) => (flexible ? size : 0)};
`;

const HorizontalWrapper = Wrapper.extend`
  width: ${({ flexible, size }: WrapperProps) => (flexible ? 'auto' : size)};
  min-width: ${({ minSize }: WrapperProps) => minSize};
  max-width: ${({ maxSize }: WrapperProps) => maxSize};
`;

const VerticalWrapper = Wrapper.extend`
  height: ${({ flexible, size }: WrapperProps) => (flexible ? 'auto' : size)};
  min-height: ${({ minSize }: WrapperProps) => minSize};
  max-height: ${({ maxSize }: WrapperProps) => maxSize};
`;

export class Panel extends PureComponent<PanelProps> {
  propagateInnerRef = (el: Element) => {
    const { index, innerRef } = this.props;
    innerRef(index, el);
  };

  render() {
    const { horizontal, size, flexible, minSize, maxSize, children } = this.props;
    const PanelWrapper = horizontal ? HorizontalWrapper : VerticalWrapper;
    return (
      <PanelWrapper
        innerRef={this.propagateInnerRef}
        flexible={flexible}
        size={size}
        minSize={minSize}
        maxSize={maxSize}
      >
        {children}
      </PanelWrapper>
    );
  }
}
