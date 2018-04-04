import React, { Component } from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
  background: gray;
`;

export class Sidebar extends Component {
  render() {
    return <SidebarWrapper>Sidebar</SidebarWrapper>;
  }
}
