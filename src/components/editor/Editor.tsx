import _ from 'lodash';
import React, { Component } from 'react';
import MonacoEditor from 'react-monaco-editor';
import { compute } from '../../constants/schemas/compute';
import { deployTemplate } from '../../constants/schemas/deployTemplate';

export interface EditorProps {
  content: string;
  onChange: (content: string, event: monaco.editor.IModelContentChangedEvent) => any;
}

export default class Editor extends Component<EditorProps> {
  editor: monaco.editor.ICodeEditor;

  shouldComponentUpdate() { return false; }

  editorWillMount() {
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      schemas: [{
        uri: 'https://schema.management.azure.com/schemas/2017-03-30/Microsoft.Compute.json',
        schema: compute
      }, {
        uri: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json',
        schema: deployTemplate
      }],
      validate: true
    });
  }

  componentWillReceiveProps(nextProps: EditorProps) {
    const { editor } = this;
    if (nextProps.content !== editor.getValue()) {
      editor.setValue(nextProps.content);
    }
  }

  render() {
    const { editorWillMount } = this;
    const { content, onChange } = this.props;
    const options: monaco.editor.IEditorOptions = {
      folding: true,
      fixedOverflowWidgets: true,
      automaticLayout: true,
      formatOnType: true,
      formatOnPaste: true
    };
    return (
      <MonacoEditor
        language="json"
        options={options}
        value={content}
        onChange={_.debounce(onChange, 100)}
        editorWillMount={editorWillMount}
        editorDidMount={editor => this.editor = editor}
      />
    );
  }
}
