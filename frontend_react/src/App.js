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

//verda@swaniawski.net

class App extends Component {
  handleOnLogin(event) {
    event.preventDefault()
    var userEmail = document.getElementById('userEmail').value
    userEmail = userEmail.replace('.', '&')
    this.props.fetchCurrentUser(userEmail)
  }

  render() {
    debugger
    return (
      <div className="App">
        <form onSubmit={this.handleOnLogin.bind(this)}>
          <input id="userEmail" type="text" placeholder="email"/>
          <button type="submit">Click me</button>
        </form>
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
