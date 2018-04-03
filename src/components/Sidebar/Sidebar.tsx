import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1 1 auto;
  background: lightskyblue;
`;

export class Sidebar extends Component {
  render() {
    return <Wrapper>Sidebar</Wrapper>;
  }
}
