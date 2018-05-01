import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { ToolboxStore } from 'stores/toolboxStore';
import { styled, ThemeProvider, themes } from 'theming';
import { TemplateStore } from '../stores';
import { SchemaStore } from './../stores/schemaStore';
import { Header } from './Header';
import { Workbench } from './Workbench';

interface AppProps {
  schemaStore?: SchemaStore;
  toolboxStore?: ToolboxStore;
}

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`;

@inject('schemaStore')
@observer
export default class App extends Component<AppProps> {
  componentDidMount() {
    const { schemaStore } = this.props;
    schemaStore.loadSchema();
  }

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
