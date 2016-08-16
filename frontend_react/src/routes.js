import React from 'react'
import { Route } from 'react-router'
import AppContainer from './App'
import SignInBox from './components/SignInBox'
import SignUpBox from './components/SignUpBox'




export default (
  <Route>
    <Route path="/" component={AppContainer} />
    <Route path="/signin" component={SignInBox} />
    <Route path="/signup" component={SignUpBox} />
  </Route>
  );
