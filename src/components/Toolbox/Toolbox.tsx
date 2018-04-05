import { TreeNodes } from 'components/shared/TreeView';
import React, { Component } from 'react';
import { TreeViewContainer } from '../shared/TreeView/TreeViewContainer';

const nodes: TreeNodes<{ text: string }> = [
  {
    text: 'Compute',
    expanded: true,
    children: [
      {
        text: 'Disks'
      },
      {
        text: 'Images'
      },
      {
        text: 'Snapshots'
      },
      {
        text: 'Virtual Machine',
        expanded: true,
        children: [
          {
            text: 'Extensions'
          }
        ]
      }
    ]
  },
  {
    text: 'Network',
    children: []
  }
];

export class Toolbox extends Component {
  render() {
    return <TreeViewContainer nodes={nodes} />;
  }
}
