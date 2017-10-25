import React, { Component } from 'react';
import TreeView from 'react-treeview';

import './react-treeview.css';
import './ToolboxItems.css';

export interface ToolboxItemsProps {
  toolboxItems: Array<{
    namespace: string,
    resources: string[]
  }>;
}

export const data = [
  {
    namespace: 'Authorization',
    resources: [
      'Locks'
    ]
  },
  {
    namespace: 'Automation',
    resources: [
      'Automation Accounts',
      'Automation Accounts / Certificates',
      'Automation Accounts / Compilation Jobs',
      'Automation Accounts / Configurations',
      'Automation Accounts / Connections'
    ]
  },
  {
    namespace: 'Compute',
    resources: [
    'Availability Sets',
    'Disks',
    'Images',
    'Snapshots',
    'Virtual Machines',
    'Virtual Machines / Extensions',
    'Virtual MachineScale Sets',
    ]
  },
  {
    namespace: 'Network',
    resources: [
      'Application Gateways',
      'Connections',
      'DNS Zones',
      'DNS Zones / A',
      'DNS Zones / AAAA',
      'DNS Zones / CNAME',
      'DNS Zones / MX',
      'DNS Zones / NS',
      'DNS Zones / PTR',
      'DNS Zones / SOA',
      'DNS Zones / SRV',
      'DNS Zones / TXT',
      'Express Route Circuits',
      'Express Route Circuits / Authorizations',
      'Express Route Circuits / Peerings',
      'Load Balancers',
      'Local Network Gateways',
      'Network Interfaces',
      'Network Security Groups'
    ]
  }
];

export default class ToolboxTreeView extends Component<ToolboxItemsProps, {}> {
  state = {
    collapsedBookkeeping: this.props.toolboxItems.map(() => false)
  };

  handleClick = (i: number) => {
    const [...collapsedBookkeeping] = this.state.collapsedBookkeeping;
    collapsedBookkeeping[i] = !collapsedBookkeeping[i];
    this.setState({collapsedBookkeeping});
  }

  collapseAll = () => {
    this.setState({
      collapsedBookkeeping: this.state.collapsedBookkeeping.map(() => true),
    });
  }

  render() {
    const { collapsedBookkeeping } = this.state;
    const { toolboxItems } = this.props;

    return (
      <div>
        <button onClick={this.collapseAll}>Collapse all</button>
        {toolboxItems.map((node: any, i: number) => {
          const namespace = node.namespace;
          const label = <span className="node" onClick={this.handleClick.bind(null, i)}>{namespace}</span>;
          return (
            <TreeView key={namespace} nodeLabel={label} collapsed={collapsedBookkeeping[i]} >
              {node.resources.map((resource: any) => <div className="info" key={resource}>{resource}</div>)}
            </TreeView>
          );
        })}
      </div>
    );
  }
}
