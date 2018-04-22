import React, { Component } from 'react';
import { Canvas } from './Canvas';
import { Editor } from './Editor';
import { Panel, PanelLayout, Splitter } from './shared/PanelLayout';
// import { Sidebar } from './Sidebar';
import { Toolbar } from './Toolbar';

interface WorkbenchProps {
  editorContent: string;
}

export class Workbench extends Component<WorkbenchProps> {
  render() {
    // tslint:disable-next-line:no-console
    console.log(this.props.editorContent);
    return (
      <PanelLayout>
        {/* <Panel initSize={48} minSize={48} maxSize={48} fixed={true}>
          <Sidebar />
        </Panel> */}
        <Panel initSize={360} minSize={160} fixed={true}>
          <Toolbar />
        </Panel>
        <Splitter />
        <Panel minSize={480} isEditor={true}>
          <PanelLayout orientation={'vertical'}>
            <Panel minSize={80}>
              <Canvas />
            </Panel>
            <Splitter />
            <Panel minSize={80} isEditor={true}>
              <Editor content={this.props.editorContent} />
            </Panel>
          </PanelLayout>
        </Panel>
      </PanelLayout>
    );
  }
}
