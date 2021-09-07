import React from 'react';
import ReactDOM from 'react-dom';
//mport './index.css';
import App from './componentes/App/App.js';
//import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

