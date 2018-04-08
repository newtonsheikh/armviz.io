import React, { Component } from 'react';
import { styled } from 'theming';
import { Toolbox } from './Toolbox';

const ToolbarWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  color: ${({ theme }) => theme.toolbar.foreground};
  background: ${({ theme }) => theme.toolbar.background};
  fill: currentColor;
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
