import React, { SFC } from 'react';
import { ToolboxGroup } from './toolbox-group/ToolboxGroup';

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

export const Toolbox: SFC<ToolboxProps> = ({ filter, groups }) => {
  return (
    <div>
      {groups.map(({ name, rootIds }) => (
        <ToolboxGroup key={name} name={name} rootIds={rootIds} />
      ))}
    </div>
  );
};
