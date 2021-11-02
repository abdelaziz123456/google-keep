import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Notes from './reducers';


const store1=createStore(Notes)
ReactDOM.render(
  <Provider store={store1}>
    <App />
  </Provider>,
  document.getElementById('root')
);

