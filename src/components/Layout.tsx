import GoldenLayout from 'golden-layout';
import $ from 'jquery';
import React, { Component } from 'react';
import Toolbox from '../containers/Toolbox';

import 'golden-layout/src/css/goldenlayout-base.css';
import 'golden-layout/src/css/goldenlayout-light-theme.css';
import * as ReactDOM from 'react-dom';

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
          title: 'toolbox 1',
          component: 'toolbox-1'
        }, {
          type: 'react-component',
          title: 'toolbox 1',
          component: 'toolbox-2'
        }]
      }]
    }, this._layoutDiv);

    layout.registerComponent('toolbox-1', Toolbox);
    layout.registerComponent('toolbox-2', Toolbox);
    layout.init();

    window.addEventListener('resize', () => { layout.updateSize(); });
  }

  render() {
    return (
      <div className="goldenLayout" ref={input => this._layoutDiv = input} />
    );
  }
}
