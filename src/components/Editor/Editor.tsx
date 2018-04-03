import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1 1 auto;
  background: lightsalmon;
`;

export class Editor extends Component {
  render() {
    return <Wrapper>Editor</Wrapper>;
  }
}
