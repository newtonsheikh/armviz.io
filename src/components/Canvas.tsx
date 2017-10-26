import React, { Component } from 'react';
import styled from 'styled-components';

// require('cytoscape-cola');
const cytoscape = require('cytoscape');
const cola = require('cytoscape-cola');
const automove = require('cytoscape-automove');

cytoscape.use(cola);
automove(cytoscape);

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

export default class Canvas extends Component {
  private _cyDiv: HTMLDivElement;
  private _cy: any;

  componentDidMount() {
    const cy = cytoscape({
      container: this._cyDiv,
      boxSelectionEnabled: false,
      autounselectify: true,
      style: [
        {
          selector: 'node',
          css: {
            'content': 'data(id)',
            'text-valign': 'center',
            'text-halign': 'center',
            'shape': 'roundrectangle',
            'overlay-padding': 0.5,
            'background-color': '#f1f1f1',
            'border-width': 1,
            'border-color': '#ccc'
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
        },
        {
          selector: '.container',
          css: {
            'width': 108,
            'height': 108,
            'background-opacity': 0,
            'border-style': 'dashed',
            'z-index-compare': 'manual'
          },
        },
        {
          selector: '.highlighted',
          css: {
            'border-color': 'MediumSeaGreen'
          }
        }
      ],
      elements: {
        nodes: [
          { data: { id: 'a' } },
          { data: { id: 'b' } },
          { data: { id: 'c' } },
          { data: { id: 'd' } },
          { data: { id: 'e' } },
        ],
        edges: [
          { data: { id: 'ad', source: 'a', target: 'd' } },
          { data: { id: 'eb', source: 'b', target: 'e' } }
        ]
      },
      layout: {
        name: 'cola',
        maxSimulationTime: 2000, // max length in ms to run the layout
        ungrabifyWhileSimulating: true, // so you can't drag nodes during layout
        padding: 200
      }
    });

    this._cy = cy;

    this._cy.$('#a').addClass('container');
    this._cy.$('#b').addClass('non-container');
    this._cy.$('#c').addClass('non-container');
    this._cy.$('#d').addClass('non-container');
    this._cy.$('#e').addClass('non-container');

    this._cy.automove({
      nodesMatching: (node: any) => {
        return node.data('containerId') === this._cy.$(':grabbed').id();
      },
      reposition: 'drag',
      dragWith: this._cy.$('.container')
    });

    cy.on('tapstart', '.non-container', (evt: any) => {
      cy.$('.container').toggleClass('highlighted', true);
    });

    cy.on('tapend', '.non-container', (evt: any) => {
      const node = evt.target;
      const pos = evt.renderedPosition;

      cy.$('.container').each((ele: any, i: number) => {
        if (ele !== node) {
          const box: any = ele.renderedBoundingBox();
          if (pos.x > box.x1 && pos.x < box.x2 && pos.y > box.y1 && pos.y < box.y2) {
            node.data('containerId', ele.id());
          }
        }
      });

      cy.$('.container').each((ele: any, i: number) => {
        if (ele !== node) {
          const box = ele.renderedBoundingBox();
          if (pos.x > box.x1 && pos.x < box.x2 && pos.y > box.y1 && pos.y < box.y2) {
            node.data('containerId', ele.id());
          }
        }
      });

      const container = cy.$id(node.data('containerId'));
      if (container) {
        const box = container.renderedBoundingBox();
        if (pos.x <= box.x1 || pos.x >= box.x2 || pos.y <= box.y1 || pos.y >= box.y2) {
          node.removeData('containerId');
        }
      }

      cy.$('.container').toggleClass('highlighted', false);
    });
  }

  render() {
    return (
      <Div innerRef={el => this._cyDiv = el} />
    );
  }
}
