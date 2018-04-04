import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Draggable, DraggableEventHandler } from '../Draggable';

interface SplitterProps {
  index: number;
  horizontal: boolean;
  onMoveStart: (index: number) => any;
  onMoveEnd: (index: number, offset: number) => any;
}

interface SplitterState {
  offset: number;
  dragging: boolean;
}

const SplitterWrapper = styled.div`
  position: relative;
  height: auto;
  width: auto;
  cursor: ${(props: Pick<SplitterProps, 'horizontal'>) => (props.horizontal ? 'ew-resize' : 'ns-resize')};
`;

const SplitterContentGhost = styled.div.attrs<{
  horizontal: boolean;
  offset: number;
  marginLeft: string;
  marginRight: string;
  marginTop: string;
  marginBottom: string;
  height: string;
  width: string;
}>({
  style: (props: { horizontal: boolean; offset: number }) => ({
    [props.horizontal ? 'left' : 'top']: `${props.offset}px`
  })
})`
  position: absolute;
  background: black;
  opacity: 0.5;
  z-index: 999;
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  margin-top: ${props => props.marginTop};
  margin-right: ${props => props.marginRight};
  height: ${props => props.height};
  width: ${props => props.width};
`;

const DefaultSplitterContent = styled.div`
  margin: ${(props: Pick<SplitterProps, 'horizontal'>) => (props.horizontal ? '0 -4px' : '-4px 0')};
  width: ${props => (props.horizontal ? '8px' : '100%')};
  height: ${props => (props.horizontal ? '100%' : '8px')};
`;

export class Splitter extends PureComponent<Partial<SplitterProps>, SplitterState> {
  state = { dragging: false, offset: 0 };

  initOffset: number;
  lowerBound: number = -300;
  upperBound: number = 300;
  contentRef: HTMLElement;

  setBoundries(
    prevPanelSize: number,
    prevPanelMinSize: number,
    prevPanelMaxSize: number,
    nextPanelSize: number,
    nextPanelMinSize: number,
    nextPanelMaxSize: number
  ) {
    this.lowerBound = Math.max(prevPanelMinSize - prevPanelSize, nextPanelSize - nextPanelMaxSize);
    this.upperBound = Math.min(prevPanelMaxSize - prevPanelSize, nextPanelSize - nextPanelMinSize);
  }

  handleDragStart: DraggableEventHandler = e => {
    const { contentRef, ensureBoundries } = this;
    const { index, horizontal, onMoveStart } = this.props;

    onMoveStart(index);

    const rect = contentRef.getBoundingClientRect();
    const offset = horizontal
      ? ensureBoundries(e.x - rect.left - contentRef.offsetWidth / 2)
      : ensureBoundries(e.y - rect.top - contentRef.offsetHeight / 2);

    this.initOffset = offset;
    this.setState({ dragging: true, offset });
    document.body.style.cursor = horizontal ? 'ew-resize' : 'ns-resize';
  };

  handleDragMove: DraggableEventHandler = e => {
    const { initOffset, ensureBoundries } = this;
    const { horizontal } = this.props;

    this.setState({
      offset: ensureBoundries(initOffset + (horizontal ? e.offsetX : e.offsetY))
    });
  };

  handleDragEnd: DraggableEventHandler = e => {
    const { index, onMoveEnd } = this.props;
    const { offset } = this.state;

    this.setState({ dragging: false, offset: 0 });
    document.body.style.cursor = 'auto';

    if (offset !== 0) {
      onMoveEnd(index, offset);
    }
  };

  ensureBoundries = (offset: number) => {
    return Math.min(Math.max(offset, this.lowerBound), this.upperBound);
  };

  setDefaultContentRef = (el: HTMLElement) => (this.contentRef = el);

  renderContentGhost = () => {
    const { horizontal } = this.props;
    const { offset } = this.state;
    const { marginLeft, marginRight, marginTop, marginBottom, height, width } = getComputedStyle(this.contentRef);
    return (
      <SplitterContentGhost
        horizontal={horizontal}
        offset={offset}
        marginLeft={marginLeft}
        marginRight={marginRight}
        marginTop={marginTop}
        marginBottom={marginBottom}
        height={height}
        width={width}
      />
    );
  };

  render() {
    const { handleDragStart, handleDragMove, handleDragEnd, setDefaultContentRef, renderContentGhost } = this;
    const { horizontal } = this.props;
    const { dragging } = this.state;
    return (
      <Draggable onDragStart={handleDragStart} onDragMove={handleDragMove} onDragEnd={handleDragEnd}>
        <SplitterWrapper horizontal={horizontal}>
          {dragging && renderContentGhost()}
          <DefaultSplitterContent innerRef={setDefaultContentRef} horizontal={horizontal} />
        </SplitterWrapper>
      </Draggable>
    );
  }
}
