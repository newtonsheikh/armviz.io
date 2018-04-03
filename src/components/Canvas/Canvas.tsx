import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1 1 auto;
  background: lightpink;
`;

export class Canvas extends Component {
  render() {
    return <Wrapper>Canvas</Wrapper>;
  }
}
