import React, { Component } from 'react';
import { styled } from 'theming';
// import { Sidebar } from './Sidebar';
import { TemplateStore } from '../stores';
import { Canvas } from './Canvas';
// import { Editor } from './Editor';
import { Panel, PanelLayout, Splitter } from './shared/PanelLayout';
import { Toolbar } from './Toolbar';

interface WorkbenchProps {
  templateStore: TemplateStore;
}

const WorkbenchWrapper = styled.div`
  display: flex;
  height: calc(100% - 48px);
`;

export class Workbench extends Component<WorkbenchProps, {}> {
  render() {
    return (
      <WorkbenchWrapper>
        <PanelLayout>
          {/* <Panel initSize={48} minSize={48} maxSize={48} fixed={true}>
          <Sidebar />
        </Panel> */}
          <Panel initSize={320} minSize={160} fixed={true}>
            <Toolbar />
          </Panel>
          <Splitter />
          <Panel minSize={480}>
            <PanelLayout orientation={'vertical'}>
              <Panel minSize={80}>
                <Canvas />
              </Panel>
              <Splitter />
              <Panel minSize={80}>{/* <Editor templateStore={this.props.templateStore} /> */}</Panel>
            </PanelLayout>
          </Panel>
        </PanelLayout>
      </WorkbenchWrapper>
    );
  }
}
