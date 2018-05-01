import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { ToolboxStore } from 'stores/toolboxStore';
import { styled } from 'theming';
import { TreeView } from '../shared/TreeView';
import { ToolboxItem } from './ToolboxItem';

interface ToolboxProps {
  toolboxStore?: ToolboxStore;
}

const ToolboxWrapper = styled.div`
  padding: 8px;
`;

@inject('toolboxStore')
@observer
export class Toolbox extends Component<ToolboxProps> {
  render() {
    const { toolboxStore } = this.props;
    return (
      <ToolboxWrapper>
        <TreeView nodes={toolboxStore.resourceTree} Content={ToolboxItem} />
      </ToolboxWrapper>
    );
  }
}
