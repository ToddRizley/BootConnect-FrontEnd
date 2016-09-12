import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer'
import {createStore, applyMiddleware} from 'redux';
import reduxPromise from 'redux-promise';
import { Router, browserHistory } from 'react-router';
import Routes from './routes';


let storewithmiddleware = applyMiddleware(reduxPromise)(createStore)(rootReducer)

ReactDOM.render(
  <Provider store={storewithmiddleware}>
    <Router history={browserHistory} routes={Routes} />
  </Provider>,
  document.getElementById('root')
);
