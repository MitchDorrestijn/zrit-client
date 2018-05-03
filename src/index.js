/**
 * React related imports
 */
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './main/routers/AppRouter';
import registerServiceWorker from './main/registerServiceWorker';

/**
 * React related imports
 */
import './main/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
