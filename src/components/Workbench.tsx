import React, { Component } from 'react';
import styled from 'styled-components';
import { Canvas } from './Canvas';
import { Editor } from './Editor';
import { Panel, PanelLayout, Splitter } from './shared/PanelLayout';
import { Sidebar } from './Sidebar';
import { Toolbar } from './Toolbar';

const WorkbenchWrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  position: relative;
`;

export class Workbench extends Component {
  render() {
    return (
      <WorkbenchWrapper style={{}}>
        <PanelLayout>
          <Panel initSize={48} minSize={48} maxSize={48} fixed={true}>
            <Sidebar />
          </Panel>
          <Panel initSize={360} minSize={160} fixed={true}>
            <Toolbar />
          </Panel>
          <Splitter />
          <Panel minSize={480}>
            <PanelLayout orientation={'vertical'}>
              <Panel minSize={80}>
                <Canvas />
              </Panel>
              <Splitter />
              <Panel minSize={80}>
                <Editor />
              </Panel>
            </PanelLayout>
          </Panel>
        </PanelLayout>
      </WorkbenchWrapper>
    );
  }
}
