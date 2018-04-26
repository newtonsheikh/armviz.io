import promiseFinally from 'promise.prototype.finally';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

promiseFinally.shim();

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
