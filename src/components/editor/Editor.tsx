import _ from 'lodash';
import React, { Component } from 'react';
import MonacoEditor from 'react-monaco-editor';

export interface EditorProps {
  content: string;
  onChange: (content: string, event: monaco.editor.IModelContentChangedEvent) => any;
}

export default class Editor extends Component<EditorProps> {
  editorWillMount() {
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      schemas: [{
        uri: 'http://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#',
        schema: {}
      }],
      validate: true
    });
  }

  render() {
    const { editorWillMount } = this;
    const { content, onChange } = this.props;
    const options: monaco.editor.IEditorOptions = {
      folding: true,
      fixedOverflowWidgets: true,
      automaticLayout: true
    };
    return (
      <MonacoEditor
        language="json"
        options={options}
        value={content}
        onChange={_.debounce(onChange, 100)}
        editorWillMount={editorWillMount}
      />
    );
  }
}
