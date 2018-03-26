import React, { Component } from 'react';
import styled from 'styled-components';
import { Canvas } from '../Canvas/Canvas';
import { Editor } from '../Editor/Editor';
import { PanelLayout } from '../PanelLayout';
import { Sidebar } from '../Sidebar';

const Wrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  position: relative;
`;

export class Workbench extends Component {
  render() {
    return (
      <Wrapper>
        <PanelLayout
          definitions={{
            0: { size: '320px', minSize: '120px', maxSize: '600px' }
          }}
        >
          <Sidebar />
          <PanelLayout
            orientation={'vertical'}
            definitions={{
              0: { minSize: '80px' },
              1: { minSize: '80px' }
            }}
          >
            <Canvas />
            <Editor />
          </PanelLayout>
        </PanelLayout>
      </Wrapper>
    );
  }
}
