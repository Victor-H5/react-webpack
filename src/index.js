import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';

// For react setPrototypeOf polyfill
Object.setPrototypeOf = require('setprototypeof');

ReactDOM.render(<App />, document.getElementById('root'));
