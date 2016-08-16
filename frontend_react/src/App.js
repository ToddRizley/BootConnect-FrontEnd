import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileContainer from './components/ProfileContainer';
import setCurrentUser from './reducers/myCurrentUser.js'
<<<<<<< HEAD
import fetchUser from './reducers/myUsers.js'
import LoginBox from './components/LoginBox'
=======
import fetchCurrentUser from './actions/fetchCurrentUser.js'
import getCurrentUser from './reducers/myGetCurrentUser.js'
>>>>>>> 5135ba1f601d07dd1a8a6c8ac155c4dff12c785e

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
        <LoginBox />
      </div>
    );
  }
}

export default App;
