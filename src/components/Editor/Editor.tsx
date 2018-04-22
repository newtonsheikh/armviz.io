import React, { Component } from 'react';
import MonacoEditor from 'react-monaco-editor';
import { styled } from 'theming';

const EditorWrapper = styled.div`
  flex: 1 1 auto;
  background: ${({ theme }) => theme.panel.background};
`;

interface EditorProps {
  content: string;
}

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
      fixedOverflowWidgets: true,
      automaticLayout: true
    };

    return (
      <EditorWrapper>
        <MonacoEditor
          language="json"
          value={this.props.content}
          options={options}
          editorDidMount={this.editorWillMount}
        />
      </EditorWrapper>
    );
  }
}
