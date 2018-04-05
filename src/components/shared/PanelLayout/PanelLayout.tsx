import React, { Children, cloneElement, Component, ReactElement } from 'react';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';
import { Panel } from './Panel';
import { Splitter } from './Splitter';

interface PanelLayoutProps {
  orientation?: 'horizontal' | 'vertical';
}

interface PanelLayoutState {
  panelSizes: number[];
}

const PanelLayoutWrapper = styled.div`
  display: flex;
  flex-direction: ${(props: PanelLayoutProps) => (props.orientation === 'horizontal' ? 'row' : 'column')};
  width: 100%;
  height: 100%;
`;

export class PanelLayout extends Component<PanelLayoutProps, PanelLayoutState> {
  static defaultProps = {
    orientation: 'horizontal'
  };

  state = {
    panelSizes: this.normalizePanelSizes(
      (Children.toArray(this.props.children) as Array<ReactElement<any>>)
        .filter(child => child.type === Panel)
        .map(child => ({ value: child.props.initSize, fixed: child.props.fixed }))
    )
  };

  ref = HTMLDivElement;
  refPanels = new Map<number, Panel>();
  refSplitters = new Map<number, Splitter>();

  handleSplitterMoveStart = (index: number) => {
    const { refPanels, refSplitters, horizontal } = this;

    const panels = [index, index + 1].map(i => refPanels.get(i));
    const dimensions = panels.map(panel => [
      findDOMNode(panel)[`client${horizontal() ? 'Width' : 'Height'}`], // size
      panel.props.minSize,
      panel.props.maxSize
    ]);

    const splitter = refSplitters.get(index);
    splitter.setBoundries.apply(splitter, [...dimensions[0], ...dimensions[1]]);
  };

  handleSplitterMoveEnd = (index: number, offset: number) => {
    const { refPanels, horizontal, normalizePanelSizes } = this;
    const panelSizes = Array.from(refPanels.values()).map(panel => {
      const panelNode = findDOMNode(panel);
      return {
        value: horizontal() ? panelNode.clientWidth : panelNode.clientHeight,
        fixed: panel.props.fixed
      };
    });

    panelSizes[index].value = panelSizes[index].value + offset;
    panelSizes[index + 1].value = panelSizes[index + 1].value - offset;

    this.setState({ panelSizes: normalizePanelSizes(panelSizes) });
  };

  normalizePanelSizes(panelSizes: Array<{ value: number; fixed: boolean }>): number[] {
    const normalizedSizes = panelSizes.map(size => size.value);

    const flexSizes = panelSizes.filter(size => !size.fixed);
    const flexWeight = flexSizes.reduce((weight, size) => weight + size.value, 0);
    if (flexSizes.length > 0 && flexWeight) {
      for (let i = 0; i < panelSizes.length; i++) {
        const size = panelSizes[i];
        if (!size.fixed) {
          normalizedSizes[i] = size.value / flexWeight;
        }
      }
    }

    return normalizedSizes;
  }

  horizontal = () => {
    return this.props.orientation === 'horizontal';
  };

  renderPanel = (child: ReactElement<any>, index: number) => {
    const { refPanels, horizontal } = this;
    const { panelSizes } = this.state;
    return cloneElement(child, {
      key: `panel-${index}`,
      ref: (panel: Panel) => refPanels.set(index, panel),
      horizontal: horizontal(),
      size: panelSizes[index]
    });
  };

  renderSplitter = (child: ReactElement<any>, index: number) => {
    const { refSplitters, handleSplitterMoveStart, handleSplitterMoveEnd, horizontal } = this;

    return cloneElement(child, {
      key: `splitter-${index}`,
      ref: (splitter: Splitter) => refSplitters.set(index, splitter),
      index,
      horizontal: horizontal(),
      onMoveStart: handleSplitterMoveStart,
      onMoveEnd: handleSplitterMoveEnd
    });
  };

  render() {
    const { renderPanel, renderSplitter } = this;
    const { orientation, children } = this.props;
    let panelIndex = 0;

    return (
      <PanelLayoutWrapper orientation={orientation}>
        {Children.map(
          children,
          (child: ReactElement<any>) =>
            child.type === Panel ? renderPanel(child, panelIndex++) : renderSplitter(child, panelIndex - 1)
        )}
      </PanelLayoutWrapper>
    );
  }
}
