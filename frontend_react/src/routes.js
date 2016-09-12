import React from 'react'
import { Route } from 'react-router'
import AppContainer from './App'
import ProfileContainer from './components/ProfileContainer'
import DashboardContainer from './components/DashboardContainer'



export default (
  <Route>
    <Route path="/" component={AppContainer} />
    <Route path="/profile" component={ProfileContainer} />
    <Route path="/dashboard" component={DashboardContainer} />
  </Route>
  );
