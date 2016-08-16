import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index'
import {createStore} from 'redux';


let store=createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
