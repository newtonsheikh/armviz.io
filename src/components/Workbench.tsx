import React, { Component } from 'react';
// import { Sidebar } from './Sidebar';
import { TemplateStore } from '../stores';
import { Canvas } from './Canvas';
import { Editor } from './Editor';
import { Panel, PanelLayout, Splitter } from './shared/PanelLayout';
// import { Sidebar } from './Sidebar';
import { Toolbar } from './Toolbar';

interface WorkbenchProps {
  templateStore: TemplateStore;
}

export class Workbench extends Component<WorkbenchProps, {}> {
  render() {
    return (
      <PanelLayout>
        {/* <Panel initSize={48} minSize={48} maxSize={48} fixed={true}>
          <Sidebar />
        </Panel> */}
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
              <Editor templateStore={this.props.templateStore} />
            </Panel>
          </PanelLayout>
        </Panel>
      </PanelLayout>
    );
  }
}
