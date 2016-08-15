import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileContainer from './components/ProfileContainer';
import setCurrentUser from './reducers/myCurrentUser.js'
import fetchUser from './reducers/myUsers.js'
import LoginBox from './components/LoginBox'

class App extends Component {
  handleOnLogin(event) {
    event.preventDefault()
    var userEmail = document.getElementById('userEmail').value
    // var userList = this.props.store.dispatch(fetchUser(users)
    //2 ways we could do this
    // 1.Post request to Rails, do a 'findByEmail' method-->
    // -->send info to frontend
      // -->frontend makes get request to get that user object
    // 2. get all users from DB, sort in front end--> find user by email, then set current user
    ///need a new fetchUser reducer that fetches INDIVIDUAL USER
    var currentUser = this.props.store.dispatch(setCurrentUser(userObject))


  }

  render() {
    return (
      <div className="App">
        <ProfileContainer store={this.props.store}/>
        <LoginBox />
      </div>
    );
  }
}

export default App;
