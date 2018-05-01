import { observer } from 'mobx-react';
import React, { Component } from 'react';
import MonacoEditor from 'react-monaco-editor';
import { styled } from 'theming';
import { TemplateStore } from '../../stores';

const EditorWrapper = styled.div`
  flex: 1 1 auto;
  background: ${({ theme }) => theme.panel.background};
`;

interface EditorProps {
  templateStore: TemplateStore;
}

@observer
export class Editor extends Component<EditorProps, {}> {
  editorWillMount() {
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      schemas: [
        {
          uri: 'http://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#',
          schema: {}
        }
      ],
      validate: true
    });
  }

  render() {
    const options: monaco.editor.IEditorOptions = {
      folding: true,
      fixedOverflowWidgets: true
    };

    return (
      <EditorWrapper>
        <MonacoEditor
          language="json"
          value={this.props.templateStore.template}
          options={options}
          editorDidMount={this.editorWillMount}
        />
      </EditorWrapper>
    );
  }
}
