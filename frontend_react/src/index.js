import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './App';
import './index.css';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index'
import {createStore, applyMiddleware} from 'redux';
import reduxPromise from 'redux-promise'


let storewithmiddleware = applyMiddleware(reduxPromise)(createStore)(rootReducer)

ReactDOM.render(
  <Provider store={storewithmiddleware}>
      <AppContainer />
  </Provider>,
  document.getElementById('root')
);
