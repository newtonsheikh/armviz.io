import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  background: lightsalmon;
`;

export class Editor extends Component {
  render() {
    return <Wrapper>I'm Editor</Wrapper>;
  }
}
