import React, { Component } from 'react';
import styled from 'styled-components';
import { Toolbox } from './Toolbox';

const ToolbarWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
`;

export class Toolbar extends Component {
  render() {
    return (
      <ToolbarWrapper>
        <Toolbox />
      </ToolbarWrapper>
    );
  }
}
