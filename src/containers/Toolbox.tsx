import React, { Component } from 'react';
import ToolboxItems, { data } from './ToolboxItems';

export default class Toolbox extends Component {
  state = { namespace: 'All' };

  handleChange = (event: any) => {
    this.setState({ namespace: event.target.value });
  }

  render() {
    const { namespace } = this.state;

    return (
      <div>
        <select value={namespace} onChange={this.handleChange}>
          <option key="All" value="All">All</option>
          {data.map(entry => {
            return (<option key={entry.namespace} value={entry.namespace}>{entry.namespace}</option>);
          })}
        </select>
        <ToolboxItems toolboxItems={namespace === 'All' ? data : data.filter(item => item.namespace === namespace)} />
      </div>
    );
  }
}
