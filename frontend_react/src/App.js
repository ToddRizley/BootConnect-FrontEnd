import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginBox from './components/LoginBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginBox />
      </div>
    );
  }
}

export default App;
