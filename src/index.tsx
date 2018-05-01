import { Provider } from 'mobx-react';
import promiseFinally from 'promise.prototype.finally';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { SchemaStore } from './stores/schemaStore';
import { ToolboxStore } from './stores/toolboxStore';

import './index.css';

promiseFinally.shim();

const schemaStore = new SchemaStore();
const toolboxStore = new ToolboxStore(schemaStore);
const stores = {
  schemaStore,
  toolboxStore
};

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
