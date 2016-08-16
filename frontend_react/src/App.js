import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileContainer from './components/ProfileContainer';
import setCurrentUser from './reducers/myCurrentUser.js'
import fetchUser from './reducers/myUsers.js'
import SignInBox from './components/SignInBox'
import fetchCurrentUser from './actions/fetchCurrentUser.js'
import myGetCurrentUser from './reducers/myGetCurrentUser.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import WelcomePage from './components/WelcomePage'


class App extends Component {
  handleOnLogin(event) {
    event.preventDefault()
    var userEmail = document.getElementById('userEmail').value
    userEmail = userEmail.replace('.', '&')
    this.props.fetchCurrentUser(userEmail)
  }
  render() {
    return (
      <div>

        <WelcomePage />

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
