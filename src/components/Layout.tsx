import GoldenLayout from 'golden-layout';
import $ from 'jquery';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Toolbox from '../containers/Toolbox';
import Canvas from './Canvas';

import 'golden-layout/src/css/goldenlayout-base.css';
import 'golden-layout/src/css/goldenlayout-light-theme.css';

(window as any).React = React;
(window as any).ReactDOM = ReactDOM;
(window as any).jQuery = (window as any).$ = $;

export default class Layout extends Component {
  private _layoutDiv: any;

  componentDidMount() {
    const layout = new GoldenLayout({
      content: [{
        type: 'row',
        content: [{
          type: 'react-component',
          title: 'Toolbox',
          component: 'toolbox',
          width: 20
        }, {
          type: 'react-component',
          title: 'Canvas',
          component: 'canvas'
        }]
      }]
    }, this._layoutDiv);

    layout.registerComponent('toolbox', Toolbox);
    layout.registerComponent('canvas', Canvas);
    layout.init();

    window.addEventListener('resize', () => { layout.updateSize(); });
  }

  render() {
    return (
      <div className="goldenLayout" ref={el => this._layoutDiv = el} />
    );
  }
}
