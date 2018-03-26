import React, { Component } from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { Workbench } from './Workbench';
// import { PanelLayout } from './PanelLayout/PanelLayout';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`;

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Workbench />
      </Wrapper>
    );
  }
}
