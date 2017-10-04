import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to ARMVIZ</h2>
        </div>
        <p className="App-intro">
          The ultimate visualization tool for ARM template.
        </p>
      </div>
    );
  }
}

export default App;
