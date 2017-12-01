import React, { Component } from 'react';
import { dndContext } from '../../constants';
import { ToolboxGroup } from './toolbox-group/ToolboxGroup';
import { Filter } from './filter/index';

export interface ToolboxProps {
  filter: {
    category: string;
    text: string;
    filter: (category: string, text: string) => any;
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
      <div>
        <Filter />
        {groups.map(({ name, rootIds }) => (
          <ToolboxGroup key={'toolbox.' + name} name={name} rootIds={rootIds} />
        ))}
      </div>
    );
  }
}

export default dndContext(Toolbox);
