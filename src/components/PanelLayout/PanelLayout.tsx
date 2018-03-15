import update from 'immutability-helper';
import React, { Children, Component, ReactChild } from 'react';
import styled from 'styled-components';
import { Panel } from './Panel';
import { Splitter } from './Splitter';
import { calc, isFlexible, isHorizontal } from './utils';

export type Orientation = 'horizontal' | 'vertical';

interface PanelDefinition {
  size: string | number;
  minSize: string;
  maxSize: string;
}

interface PanelLayoutProps {
  orientation?: Orientation;
  definitions?: {
    [index: number]: Partial<PanelDefinition>;
  };
}

interface PanelLayoutState {
  definitions: Array<
    PanelDefinition & {
      minSizeInPixels?: number;
      maxSizeInPixels?: number;
    }
  >;
  splitterRanges: Array<{
    lowerBound: number;
    upperBound: number;
  }>;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: ${({ horizontal }: { horizontal: boolean }) => (horizontal ? 'row' : 'column')};
  width: 100%;
  height: 100%;
`;

const Ruler = styled.div`
  position: absolute;
  visibility: hidden;
`;

export class PanelLayout extends Component<PanelLayoutProps, PanelLayoutState> {
  static defaultProps = {
    orientation: 'horizontal',
    definitions: {}
  };

  state: PanelLayoutState = {
    definitions: Children.map(this.props.children, (child, i) => {
      const { size = 1, minSize = '4px', maxSize = 'none' } = this.props.definitions[i] || {};
      return {
        size: isFlexible(size) ? size : calc(size),
        minSize: minSize === '4px' ? minSize : calc(minSize),
        maxSize: maxSize === 'none' ? maxSize : calc(maxSize),
        minSizeInPixels: minSize === '4px' ? 4 : undefined,
        maxSizeInPixels: maxSize === 'none' ? Infinity : undefined
      };
    }),
    splitterRanges: new Array(Children.count(this.props.children) - 1).fill({
      lowerBound: 0,
      upperBound: 0
    })
  };

  panelRefs = new Map<number, HTMLDivElement>();
  rulerRef: HTMLDivElement;

  handleMoveStart = (index: number) => {
    const [m1, m2] = [index, index + 1].map(i => this.measurePanel(i));
    const lowerBound = Math.max(m1.minSize - m1.size, m2.size - m2.maxSize);
    const upperBound = Math.min(m1.maxSize - m1.size, m2.size - m2.minSize);
    this.setState(prevState =>
      update(prevState, {
        splitterRanges: {
          [index]: { $set: { lowerBound, upperBound } }
        }
      })
    );
  };

  handleMoveEnd = (index: number, distance: number) => {
    this.setState(prevState =>
      update(prevState, {
        definitions: (definitions: PanelDefinition[]) =>
          update(definitions, this.updateDefinitions(definitions, index, distance))
      })
    );
  };

  updateDefinitions = (definitions: PanelDefinition[], index: number, distance: number) => {
    const { measurePanel } = this;
    const [size1, size2] = [index, index + 1].map(i => measurePanel(i).size * 1.0);
    let [defSize1, defSize2] = [index, index + 1].map(i => definitions[i].size);

    defSize1 = isFlexible(defSize1) ? (size1 + distance) / size1 * defSize1 : calc(`${defSize1} + ${distance}px`);
    defSize2 = isFlexible(defSize2) ? (size2 - distance) / size2 * defSize2 : calc(`${defSize2} - ${distance}px`);

    return {
      [index]: { $merge: { size: defSize1 } },
      [index + 1]: { $merge: { size: defSize2 } }
    };
  };

  measurePanel = (index: number) => {
    const { panelRefs, getSizeInPixels } = this;
    const { orientation } = this.props;
    const { definitions } = this.state;

    const panelRef = panelRefs.get(index);
    const panelDef = definitions[index];

    const size = isHorizontal(orientation) ? panelRef.offsetWidth : panelRef.offsetHeight;
    const minSize = panelDef.minSizeInPixels || getSizeInPixels(panelDef.minSize);
    const maxSize = panelDef.maxSizeInPixels || getSizeInPixels(panelDef.maxSize);

    return { size, minSize, maxSize: maxSize < minSize ? minSize : maxSize };
  };

  getSizeInPixels = (size: string) => {
    this.rulerRef.style.left = size;
    return this.rulerRef.offsetLeft;
  };

  setPanelRef = (index: number, el: HTMLDivElement) => this.panelRefs.set(index, el);

  setRulerRef = (el: HTMLDivElement) => (this.rulerRef = el);

  renderPanel = (child: ReactChild, index: number) => {
    const { setPanelRef } = this;
    const { orientation } = this.props;
    const { size, minSize, maxSize } = this.state.definitions[index];
    return (
      <Panel
        innerRef={setPanelRef}
        key={`panel-${index}`}
        index={index}
        horizontal={isHorizontal(orientation)}
        flexible={isFlexible(size)}
        size={size}
        minSize={minSize}
        maxSize={maxSize}
      >
        {child}
      </Panel>
    );
  };

  renderSplitter = (index: number) => {
    const { handleMoveStart, handleMoveEnd } = this;
    const { orientation } = this.props;
    const splitterRange = this.state.splitterRanges[index];
    return (
      <Splitter
        key={`splitter-${index}`}
        index={index}
        horizontal={isHorizontal(orientation)}
        lowerBound={splitterRange.lowerBound}
        upperBound={splitterRange.upperBound}
        onMoveStart={handleMoveStart}
        onMoveEnd={handleMoveEnd}
      />
    );
  };

  render() {
    const { renderPanel, renderSplitter, setRulerRef } = this;
    const { orientation, children } = this.props;
    const childCount = Children.count(children);
    return (
      <Wrapper>
        <InnerWrapper horizontal={isHorizontal(orientation)}>
          {Children.map(children, (child, i) => (
            <>
              {renderPanel(child, i)}
              {i < childCount - 1 && renderSplitter(i)}
            </>
          ))}
        </InnerWrapper>
        <Ruler innerRef={setRulerRef} />
      </Wrapper>
    );
  }
}
