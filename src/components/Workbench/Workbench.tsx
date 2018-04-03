import React, { Component } from 'react';
import styled from 'styled-components';
import { Canvas } from '../Canvas/Canvas';
import { Editor } from '../Editor/Editor';
import { PanelLayout } from '../PanelLayout';
import { Panel } from '../PanelLayout/Panel';
import { Splitter } from '../PanelLayout/Splitter';
import { Sidebar } from '../Sidebar';

const Wrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  position: relative;
`;

export class Workbench extends Component {
  render() {
    return (
      <Wrapper style={{}}>
        <PanelLayout>
          <Panel initSize={400} minSize={160} fixed={true}>
            <Sidebar />
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
      </Wrapper>
    );
  }
}
