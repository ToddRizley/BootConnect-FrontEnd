import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer'
import {createStore, applyMiddleware} from 'redux';
import reduxPromise from 'redux-promise';
import { Router, Route, browserHistory } from 'react-router';
import Routes from './routes';
import AppContainer from './App';
import SignInBox from './components/SignInBox';
import SignUpBox from './components/SignUpBox';

let storewithmiddleware = applyMiddleware(reduxPromise)(createStore)(rootReducer)

ReactDOM.render(
  <Provider store={storewithmiddleware}>
    <Router history={browserHistory} routes={Routes} />
  </Provider>,
  document.getElementById('root')
);
