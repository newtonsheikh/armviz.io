import React, { Component } from 'react';
import { styled, ThemeProvider, themes } from 'theming';
import { SchemaStore } from './../stores/schemaStore';
import { Header } from './Header';
import { Workbench } from './Workbench';

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`;

export default class App extends Component {
  componentDidMount() {
    const schemaStore = new SchemaStore();
    schemaStore.loadSchema();
  }

  render() {
    return (
      <ThemeProvider theme={themes.dark}>
        <AppWrapper>
          <Header />
          <Workbench />
        </AppWrapper>
      </ThemeProvider>
    );
  }
}
