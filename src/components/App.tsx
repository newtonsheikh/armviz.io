import React, { Component } from 'react';
import { styled, ThemeProvider, themes } from 'theming';
import { Header } from './Header';
import { Workbench } from './Workbench';

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`;

interface WorkbenchState {
  editorContent: string;
}

export default class App extends Component<{}, WorkbenchState> {
  readonly defaultJsonContent = [
    '{',
    '  "$schema": "http://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",',
    '  "contentVersion": "1.0.0.0",',
    '  "parameters": {},',
    '  "variables": {},',
    '  "resources": [],',
    '  "output": {}',
    '}'
  ].join('\n');

  state = {
    editorContent: this.defaultJsonContent
  };

  handleNewJson = (jsonConent: string) => {
    this.setState({
      editorContent: jsonConent
    });
  };

  render() {
    return (
      <ThemeProvider theme={themes.dark}>
        <AppWrapper>
          <Header handleNewJson={this.handleNewJson} />
          <Workbench editorContent={this.state.editorContent} />
        </AppWrapper>
      </ThemeProvider>
    );
  }
}
