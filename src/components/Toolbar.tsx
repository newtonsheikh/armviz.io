import React, { Component } from 'react';
import styled from 'styled-components';

const ToolbarWrapper = styled.div`
  flex: 1 1 auto;
  background: lightskyblue;
`;

export class Toolbar extends Component {
  render() {
    return <ToolbarWrapper>Toolbar</ToolbarWrapper>;
  }
}
