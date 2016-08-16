import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginBox from './components/LoginBox';
import ProfileContainer from './components/ProfileContainer';
import setCurrentUser from './reducers/myCurrentUser.js'
import fetchCurrentUser from './actions/fetchCurrentUser.js'
import getCurrentUser from './reducers/myGetCurrentUser.js'

class App extends Component {
  handleOnLogin(event) {
    debugger
    var userEmail = document.getElementById('userEmail').value
    userEmail = userEmail.replace('.', '&')
    this.props.store.dispatch(fetchCurrentUser(userEmail))
    //var currentUser = this.props.store.dispatch(setCurrentUser(userObject))


  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleOnLogin.bind(this)}>
          <input id="userEmail"  type="text" placeholder="email"/>
          <button type="submit">Click me</button>
        </form>
        <ProfileContainer store={this.props.store}/>
      </div>
    );
  }
}

export default App;
