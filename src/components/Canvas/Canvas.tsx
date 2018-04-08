import React, { Component } from 'react';
import { styled } from 'theming';

const Wrapper = styled.div`
  flex: 1 1 auto;
  background: ${({ theme }) => theme.panel.background};
`;

export class Canvas extends Component {
  render() {
    return <Wrapper>Canvas</Wrapper>;
  }
}
