import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  background-color: #292c2f;
  padding-left: 24px;
  padding-right: 12px;
  height: 42px;
`;

const Link = styled.a`
  &:link {
    text-decoration: none;
  }
`;

const Brand = Link.extend`
  float: left;
  color: #608bd2;
  font: 20px Arial, Helvetica, sans-serif;
  line-height: 42px;
  margin: 0;
  &:hover {
    color: #608bd2;
  }
`;

const Nav = styled.nav`
  font:15px Arial, Helvetica, sans-serif;
  line-height: 42px;
  float: right;
`;

const NavLink = Link.extend`
  display: inline-block;
  padding: 0 12px;
  color: #ffffff;
  opacity: 0.8;

  &:hover {
    color: #ffffff;
    opacity: 1;
  }
`;

export default () => (
  <Wrapper>
    <Brand href="/">ARM Visualizer</Brand>
    <Nav>
      <NavLink href="/">QuickStart</NavLink>
      <NavLink href="/">GitHub</NavLink>
      <NavLink href="/">Feedback</NavLink>
      <NavLink href="/">Help</NavLink>
    </Nav>
  </Wrapper>
);
