import React, { Component } from 'react';
import styled from 'styled-components';
import { dndContext } from '../../constants';
import { ToolboxGroup } from './toolbox-group/ToolboxGroup';

const Wrapper = styled.div`
  height: 100%;
  background: #fffffe;
`;

export interface ToolboxProps {
  filter: {
    category: string;
    text: string;
  };
  groups: Array<{
    name: string;
    rootIds: string[];
  }>;
}

class Toolbox extends Component<ToolboxProps>  {
  render() {
    const { groups } = this.props;
    return (
      <Wrapper>
        {groups.map(({ name, rootIds }) => (
          <ToolboxGroup key={'toolbox.' + name} name={name} rootIds={rootIds} />
        ))}
      </Wrapper>
    );
  }
}

export default dndContext(Toolbox);
