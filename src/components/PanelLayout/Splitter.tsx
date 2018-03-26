import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Draggable, DraggableEventHandler } from '../Draggable';

type SplitBarProps = Pick<SplitterState, 'dragging' | 'top' | 'left'>;

const Bar = styled.div.attrs<SplitBarProps>({
  style: ({ top, left }: SplitBarProps) => ({
    top: `${top}px`,
    left: `${left}px`
  })
})`
  position: relative;
  opacity: ${props => (props.dragging ? 0.5 : 0)};
`;

const HorizontalBar = Bar.extend`
  margin: 0 -4px;
  border-left: 4px solid black;
  border-right: 4px solid black;
  cursor: ew-resize;
`;

const VerticalBar = Bar.extend`
  margin: -4px 0;
  border-top: 4px solid black;
  border-bottom: 4px solid black;
  cursor: ns-resize;
`;

interface SplitterProps {
  index: number;
  horizontal: boolean;
  lowerBound: number;
  upperBound: number;
  onMoveStart: (index: number) => any;
  onMoveEnd: (index: number, distance: number) => any;
}

interface SplitterState {
  dragging: boolean;
  top: number;
  left: number;
  initialOffset: number;
}

export class Splitter extends PureComponent<SplitterProps, SplitterState> {
  splitBarRef: HTMLDivElement;
  state = { dragging: false, top: 0, left: 0, initialOffset: 0 };

  handleDragStart: DraggableEventHandler = e => {
    const { index, horizontal, onMoveStart } = this.props;
    const splitBarRect = this.splitBarRef.getBoundingClientRect();
    if (horizontal) {
      document.body.style.cursor = 'ew-resize';
      const initialOffset = this.bound(e.x - splitBarRect.left - this.splitBarRef.offsetWidth / 2.0);
      this.setState({ dragging: true, left: initialOffset, initialOffset });
    } else {
      document.body.style.cursor = 'ns-resize';
      const initialOffset = this.bound(e.y - splitBarRect.top - this.splitBarRef.offsetHeight / 2.0);
      this.setState({ dragging: true, top: initialOffset, initialOffset });
    }
    onMoveStart(index);
  };

  handleDragMove: DraggableEventHandler = e => {
    const { initialOffset } = this.state;
    this.props.horizontal
      ? this.setState({ left: this.bound(e.offsetX + initialOffset) })
      : this.setState({ top: this.bound(e.offsetY + initialOffset) });
  };

  handleDragEnd: DraggableEventHandler = e => {
    const { index, horizontal, onMoveEnd } = this.props;
    const { top, left } = this.state;
    document.body.style.cursor = 'auto';
    this.setState({ dragging: false, top: 0, left: 0, initialOffset: 0 });
    onMoveEnd(index, horizontal ? left : top);
  };

  bound = (offset: number) => {
    const { lowerBound, upperBound } = this.props;
    return Math.min(Math.max(offset, lowerBound), upperBound);
  };

  setSplitBarRef = (el: any) => (this.splitBarRef = el);

  render() {
    const { handleDragStart, handleDragMove, handleDragEnd, setSplitBarRef } = this;
    const { dragging, top, left } = this.state;
    const SplitBar = this.props.horizontal ? HorizontalBar : VerticalBar;
    return (
      <Draggable onDragStart={handleDragStart} onDragMove={handleDragMove} onDragEnd={handleDragEnd}>
        <SplitBar innerRef={setSplitBarRef} dragging={dragging} top={top} left={left} />
      </Draggable>
    );
  }
}
