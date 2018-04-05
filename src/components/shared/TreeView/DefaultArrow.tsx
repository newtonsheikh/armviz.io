import React, { SFC } from 'react';
import styled from 'styled-components';

interface ArrowProps {
  expanded: boolean;
}

const Svg = styled.svg`
  width: 16px;
  height: 16px;
`;

export const DefaultArrow: SFC<ArrowProps> = ({ expanded }) => (
  <Svg viewBox="0 0 1024 1024">
    <path
      d={
        expanded
          ? 'M793.2 320 832 361.4 512 704 192 361.4 230.6 320 512 621Z'
          : 'M320 230.8 361.4 192 704 512 361.4 832 320 793.4 621 512Z'
      }
    />
  </Svg>
);
