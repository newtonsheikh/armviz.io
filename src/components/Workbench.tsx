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
  editor: Editor;

  handleLayoutUpdated = () => {
    this.editor.layout();
  };

  render() {
    const { handleLayoutUpdated } = this;
    return (
      <PanelLayout onUpdated={handleLayoutUpdated}>
        <Panel initSize={320} minSize={160} fixed={true}>
          <Toolbar />
        </Panel>
        <Splitter />
        <Panel minSize={480}>
          <PanelLayout onUpdated={handleLayoutUpdated} orientation={'vertical'}>
            <Panel minSize={80}>
              <Canvas />
            </Panel>
            <Splitter />
            <Panel minSize={80}>
              <Editor ref={el => (this.editor = el)} templateStore={this.props.templateStore} />
            </Panel>
          </PanelLayout>
        </Panel>
      </PanelLayout>
    );
  }
}
