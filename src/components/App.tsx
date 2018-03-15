import React, { Component } from 'react';
import { PanelLayout } from './PanelLayout/PanelLayout';

export default class App extends Component {
  render() {
    return (
      <PanelLayout
        definitions={{
          0: { size: '500px' }
        }}
      >
        <div style={{ width: '100%', height: '100%', background: '#9E9AC8' }} />
        <div style={{ width: '100%', height: '100%', background: '#BCBDDC' }} />
        <div style={{ width: '100%', height: '100%', background: 'white' }} />
      </PanelLayout>
    );
  }
}
