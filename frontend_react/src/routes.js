import React from 'react'
import { Route } from 'react-router'
import App from './App'
import LoginBox from './components/LoginBox'
import SignUpBox from './components/SignUpBox'
import ProfileContainer from './components/ProfileContainer'
import DashboardContainer from './components/DashboardContainer'




let currentName = store.currentUser.name

export default (
  <Route path="/" component={App} >
    <Route path="login" component={LoginBox} />
    <Route path="signup" component={SignUpBox} />
    <Route path="admin/"+ {currentName}+ "/profile" component={ProfileContainer} />
    <Route path="user/"+{currentName} +"/profile" component={ProfileContainer} />
    <Route path="admin/"+ {currentName}+ "/dashboard" component={DashboardContainer} />
    <Route path="user/"+ {currentName}+ "/dashboard" component={DashboardContainer} />
  </Route>
  );
