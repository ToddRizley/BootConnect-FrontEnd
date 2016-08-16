import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileContainer from './components/ProfileContainer';
import setCurrentUser from './reducers/myCurrentUser.js'
import fetchUser from './reducers/myUsers.js'
import LoginBox from './components/LoginBox'
import fetchCurrentUser from './actions/fetchCurrentUser.js'
import myGetCurrentUser from './reducers/myGetCurrentUser.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//verda@swaniawski.net
class App extends Component {

  handleOnLogin(event) {
    event.preventDefault()
    var userEmail = document.getElementById('userEmail').value
    userEmail = userEmail.replace('.', '&')
    this.props.fetchCurrentUser(userEmail)
    //var currentUser = this.props.store.dispatch(setCurrentUser(userObject))
  }


  render() {
    debugger
    return (
      <div className="App">
        <form onSubmit={this.handleOnLogin.bind(this)}>
          <input id="userEmail" type="text" placeholder="email"/>
          <button type="submit">Click me</button>
        </form>
        <ProfileContainer/>
        <LoginBox/>
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
