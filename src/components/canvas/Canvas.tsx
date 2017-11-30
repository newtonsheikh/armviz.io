import cytoscape, { ElementDefinition, Position } from 'cytoscape';
import React, { Component, ReactInstance } from 'react';
import { ConnectDropTarget, DropTarget, DropTargetCollector, DropTargetSpec } from 'react-dnd';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';
import { TOOLBOX_ITEM } from '../../constants/index';
import { ToolboxItemData } from '../toolbox/index';

const DropLayer = styled.div`
  height: 100%;
  width: 100%;
`;

const CyContainer = styled.div`
  height: 100%;
  width: 100%;
  background: #fffffe;
`;

interface CanvasProps {
  addNode: (data: ToolboxItemData, renderPosition: Position) => any;
  elements: ElementDefinition[];
  connectDropTarget?: ConnectDropTarget;
}

class Canvas extends Component<CanvasProps> {
  cy: cytoscape.Core;
  cyContainer: HTMLDivElement;

  componentDidMount() {
    this.cy = cytoscape({
      container: this.cyContainer,
      style: [
        {
          selector: 'node',
          css: {
            'content': 'data(label)',
            'text-valign': 'center',
            'text-halign': 'center',
            'text-margin-y': 42,
            'text-wrap': 'wrap',
            'text-max-width': 108,
            'font-size': 12,
            'shape': 'roundrectangle',
            'overlay-padding': 0.5,
            'width': 120,
            'height': 120,
            'background-color': '#ddd'
          }
        },
        {
          selector: 'edge',
          css: {
            'line-color': 'orange',
            'width': 1.5,
            'target-arrow-color': 'orange',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
            'arrow-scale': 0.6,
            'overlay-padding': 3
          }
        }
      ],
      layout: {
        name: 'grid'
      }
    });
  }

  shouldComponentUpdate() { return false; }

  componentWillReceiveProps(nextProps: CanvasProps) {
    (this.cy as any).json({ elements: nextProps.elements });
    (this.cy as any).json({ elements: nextProps.elements });
  }

  render() {
    const { connectDropTarget } = this.props;
    return (
      <DropLayer ref={(instance: ReactInstance) => connectDropTarget(findDOMNode(instance) as any)}>
        <CyContainer innerRef={el => this.cyContainer = el} />
      </DropLayer>
    );
  }
}

const toolboxItemTarget: DropTargetSpec<CanvasProps> = ({
  drop: (props, monitor, component) => {
    const clientOffset = monitor.getClientOffset();
    const componentRect = findDOMNode(component).getBoundingClientRect();
    const position = {
      x: clientOffset.x - componentRect.left,
      y: clientOffset.y - componentRect.top
    };
    // tslint:disable-next-line:no-console
    console.log(position);
    component.props.addNode(monitor.getItem() as ToolboxItemData, position);
  }
});

const collect: DropTargetCollector = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget()
});

export default DropTarget<CanvasProps>(TOOLBOX_ITEM, toolboxItemTarget, collect)(Canvas);
