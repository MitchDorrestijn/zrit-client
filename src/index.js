import React from 'react';
import ReactDOM from 'react-dom';
import './main/css/index.css';
import App from './main/App';
import registerServiceWorker from './main/registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
