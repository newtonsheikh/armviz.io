import React, { Component } from 'react';
import MonacoEditor from 'react-monaco-editor';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1 1 auto;
`;

export class Editor extends Component {
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
    const templateJson = [
      '{',
      '  "$schema": "http://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",',
      '  "contentVersion": "1.0.0.0",',
      '  "parameters": {},',
      '  "variables": {},',
      '  "resources": [],',
      '  "output": {}',
      '}'
    ].join('\n');

    const options: monaco.editor.IEditorOptions = {
      folding: true,
      fixedOverflowWidgets: true,
      automaticLayout: true
    };

    return (
      <Wrapper>
        <MonacoEditor language="json" value={templateJson} options={options} editorDidMount={this.editorWillMount} />
      </Wrapper>
    );
  }
}
