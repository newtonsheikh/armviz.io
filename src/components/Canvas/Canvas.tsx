import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  background: lightpink;
`;

export class Canvas extends Component {
  render() {
    return <Wrapper>Canvas</Wrapper>;
  }
}
