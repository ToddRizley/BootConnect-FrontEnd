import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import WelcomePage from './components/welcomePage'






//verda@swaniawski.net
class AppContainer extends Component {
  render() {
    return (
      <div>
        <WelcomePage />
      </div>
    );
  }
}

export default AppContainer
