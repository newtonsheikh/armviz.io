import React, { Component } from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
  flex: 1 1 auto;
  background: gray;
`;

export class Sidebar extends Component {
  render() {
    return <SidebarWrapper>Sidebar</SidebarWrapper>;
  }
}
