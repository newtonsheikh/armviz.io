import React, { Component } from 'react';
import { styled, ThemeProvider, themes } from 'theming';
import { TemplateStore } from '../stores';
import { Header } from './Header';
import { Workbench } from './Workbench';

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`;

export default class App extends Component {
  render() {
    const templateStore = new TemplateStore();
    return (
      <ThemeProvider theme={themes.dark}>
        <AppWrapper>
          <Header templateStore={templateStore} />
          <Workbench templateStore={templateStore} />
        </AppWrapper>
      </ThemeProvider>
    );
  }
}
