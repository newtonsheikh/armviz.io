import React, { Component } from 'react';
import { styled } from 'theming';

const HeaderWrapper = styled.div`
  display: flex;
  flex: 0 1 auto;
  height: 40px;
  padding: 0 8px;
  align-items: center;
  color: ${({ theme }) => theme.header.foreground};
  background: ${({ theme }) => theme.header.background};
`;

const Banner = styled.h3`
  margin: 0;
  padding: 0;
  font-weight: 900;
  color: ${({ theme }) => theme.banner.foreground};
`;

export class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Banner>Header</Banner>
      </HeaderWrapper>
    );
  }
}
