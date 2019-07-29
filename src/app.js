import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<AppRouter />, document.getElementById('app'))