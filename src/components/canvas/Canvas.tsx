import cytoscape, { ElementDefinition, Position } from 'cytoscape';
import React, { Component, ReactInstance } from 'react';
import { ConnectDropTarget, DropTarget, DropTargetCollector, DropTargetSpec } from 'react-dnd';
import { findDOMNode } from 'react-dom';
import Measure from 'react-measure';
import styled from 'styled-components';
import { TOOLBOX_ITEM } from '../../constants/index';
import { ToolboxItemData } from '../toolbox/index';

// const vm = require('images/virtual-machine.svg');
const svg = '<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><path fill="#3999C6" d="M25 22.6h-.2L10 14v-.3-.4L24.8 5c.2-.2.3-.2.5 0L40 13.3v.8l-14.7 8.4H25"/><path fill="#59B4D9" d="M23 43.3h-.3L8 34.7l-.2-.4v-17c0-.2 0-.3.2-.4h.5l14.7 8.5.2.4v16.8c0 .2 0 .3-.2.4H23M27 43.3c-.3-.2-.4-.3-.4-.5V26c0-.2 0-.3.3-.4L41.4 17h.5l.2.5v17s0 .2-.2.3l-14.7 8.4H27"/><path opacity=".5" fill="#FFF" d="M27 43.3c-.3-.2-.4-.3-.4-.5V26c0-.2 0-.3.3-.4L41.4 17h.5l.2.5v17s0 .2-.2.3l-14.7 8.4H27"/><path fill="#7A7A7A" d="M9.6 45.2c-.3 0-.5 0-.8-.2L2 41c-1.2-.6-2-2-2-3.4V12.4C0 11 .8 9.6 2 9l6.8-4c.7-.4 1.6 0 2 .6.4.7.2 1.5-.5 2l-7 4s-.4.5-.4.8v25.2c0 .3.2.8.4 1l7 4c.6.3.8 1 .4 1.8-.3.5-.7.8-1.2.8zM40.4 4.8c.3 0 .5 0 .8.2L48 9c1.2.6 2 2 2 3.4v25.2c0 1.3-.8 2.8-2 3.4l-6.8 4c-.7.4-1.6 0-2-.6-.4-.7-.2-1.5.5-2l7-4s.4-.5.4-.8V12.4c0-.3-.2-.8-.4-1l-7-4c-.6-.3-.8-1-.4-1.8.3-.5.7-.8 1.2-.8z"/></svg>';

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
      elements: this.props.elements,
      style: [
        {
          selector: 'node',
          css: {
            'content': 'data(label)',
            'text-valign': 'center',
            'text-halign': 'center',
            'text-margin-y': 30,
            'text-wrap': 'wrap',
            'text-max-width': 84,
            'font-size': 10,
            'shape': 'roundrectangle',
            'overlay-padding': 0.5,
            'width': 96,
            'height': 96,
            'background-color': '#ddd',
            'background-image': 'data:image/svg+xml;base64,' + btoa(svg),
            'background-position-y': 20,
            'background-width': '40%',
            'background-height': '40%'
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
      <Measure onResize={() => this.cy.resize()}>
        {({ measureRef }) =>
          <DropLayer
            className={'canvas'}
            ref={(instance: ReactInstance) => connectDropTarget(findDOMNode(instance) as any)}
            innerRef={measureRef}
          >
            <CyContainer innerRef={el => this.cyContainer = el} />
          </DropLayer>}
      </Measure>
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
