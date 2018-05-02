import React, { Component } from 'react';
import { TemplateStore } from '../stores';
import { Canvas } from './Canvas';
import { Editor } from './Editor';
import { Panel, PanelLayout, Splitter } from './shared/PanelLayout';
import { Toolbar } from './Toolbar';

interface WorkbenchProps {
  templateStore: TemplateStore;
}

export class Workbench extends Component<WorkbenchProps, {}> {
  render() {
    return (
      <PanelLayout>
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
