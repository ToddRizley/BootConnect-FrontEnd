import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginBox from './components/LoginBox';
import ProfileContainer from './components/ProfileContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProfileContainer/>
      </div>
    );
  }
}

export default App;
