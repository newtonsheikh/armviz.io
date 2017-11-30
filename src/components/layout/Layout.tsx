import GoldenLayout from 'golden-layout';
import $ from 'jquery';
import PropTypes from 'prop-types';
import React, { Component, ComponentType } from 'react';
import ReactDOM from 'react-dom';
import { Provider, Store } from 'react-redux';
import { Editor } from '../editor';
import { Toolbox } from '../toolbox';

import 'golden-layout/src/css/goldenlayout-base.css';
import 'golden-layout/src/css/goldenlayout-light-theme.css';

(window as any).React = React;
(window as any).ReactDOM = ReactDOM;
(window as any).jQuery = (window as any).$ = $;

export default class Layout extends Component {
  private _layoutDiv: HTMLDivElement;

  static contextTypes = {
    store: PropTypes.object.isRequired,
  };

  componentDidMount() {
    function withStore(Comp: ComponentType, store: Store<any>) {
      // tslint:disable-next-line:max-classes-per-file
      class Wrapped extends Component {
        render() {
          return (
            <Provider store={store}>
              <Comp />
            </Provider>
          );
        }
      }
      return Wrapped;
    }

    const layout = new GoldenLayout({
      dimensions: {
        minItemHeight: 30,
        minItemWidth: 180,
      },
      content: [{
        type: 'row',
        content: [{
          type: 'react-component',
          title: 'Toolbox',
          component: 'toolbox',
          width: 20
        }, {
          type: 'column',
          content: [{
            type: 'component',
            title: 'Canvas',
            componentName: 'canvas',
            height: 60
          }, {
            type: 'react-component',
            title: 'Editor',
            component: 'editor'
          }]
        }]
      }]
    }, this._layoutDiv);

    layout.registerComponent('toolbox', withStore(Toolbox, this.context.store));
    layout.registerComponent('canvas', () => {/**/ });
    layout.registerComponent('editor', Editor);
    layout.init();

    window.addEventListener('resize', () => { layout.updateSize(); });
  }

  render() {
    return (
      <div className="goldenLayout" ref={el => this._layoutDiv = el} />
    );
  }
}
