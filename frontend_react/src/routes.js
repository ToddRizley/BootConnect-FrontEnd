import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import AppContainer from './App'
import Users from './components/Users'
import ProfileContainer from './components/ProfileContainer'
import DashboardContainer from './components/DashboardContainer'
import NoMatch from './components/NoMatch'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer} />
    <Route path="dashboard" component={DashboardContainer} />
    <Route path="users/:userId" component={ProfileContainer} />
    <Route path="*" component={NoMatch} />
  </Router>
  );
