import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileContainer from './components/ProfileContainer';
import setCurrentUser from './reducers/myCurrentUser.js'
import fetchUser from './reducers/myUsers.js'
import SignInBox from './components/SignInBox'
import SignUpBox from './components/SignUpBox'
import fetchCurrentUser from './actions/fetchCurrentUser.js'
import myGetCurrentUser from './reducers/myGetCurrentUser.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import WelcomePage from './components/welcomePage'

//verda@swaniawski.net
class App extends Component {
  render() {
    return (
      <div className="App">
        <WelcomePage/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {store: state}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchCurrentUser}, dispatch)
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppContainer
