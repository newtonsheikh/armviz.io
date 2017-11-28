import React, { SFC } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { Toolbox } from '../toolbox';

const App: SFC = () => (
  <Provider store={store}>
    <Toolbox />
  </Provider>
);

export default App;
