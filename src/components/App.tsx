import React, { SFC } from 'react';
import Header from '../components/Header';
import Layout from './Layout';

const App: SFC = () => {
    return (
      <div>
        <Header />
        <Layout />
      </div>
    );
};

export default App;
