import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/App';

import './main/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import registerServiceWorker from './main/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
