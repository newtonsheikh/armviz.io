import React, { SFC } from 'react';
import styled from 'styled-components';

const CaretSvg = styled.svg`
  width: 12px;
  height: 100%;
`;

const CaretPath = styled.path`
    fill: gray;
    stroke: gray;
    stroke-linejoin: round;
    stroke-width: 0.5px;
`;

const CaretPathClosed = CaretPath.extend`
  fill: none;
  stroke-width: 1px;
`;

export interface CaretProps {
  expanded: boolean;
  onClick?: () => any;
}

export const Caret: SFC<CaretProps> = ({ expanded, onClick }) => (
  <CaretSvg onClick={onClick} viewBox="0 0 12 12">
    {expanded
      ? <CaretPath d="M 8 3.5 V 9 H 3 Z" />
      : <CaretPathClosed d="M 4 2.5 V 9.5 L 8 6 Z" />
    }
  </CaretSvg>
);
