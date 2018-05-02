import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './main/routers/AppRouter';

import './main/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import registerServiceWorker from './main/registerServiceWorker';

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
