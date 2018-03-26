import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 0 1 auto;
  display: flex;
  background: #9e9ac8;
  padding: 0 8px;
  height: 40px;
  align-items: center;
`;

const Banner = styled.h3`
  margin: 0;
  padding: 0;
`;

export class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Banner>Header</Banner>
      </Wrapper>
    );
  }
}
