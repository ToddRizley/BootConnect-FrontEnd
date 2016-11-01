import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import fetchUserLogin from '../actions/fetchUserLogin'


class SignInBox extends Component {
  constructor(props){
    super(props)
    this.state = {invalid: false}
  }

  handleFormSubmit(props) {
    event.preventDefault()
    if (props.userEmail && props.userPassword) {
    let userEmail = props.userEmail.replace('.', '&')
      this.props.fetchUserLogin(userEmail, props.userPassword).then( (response)=>{

      if (response.payload.data) {
        var router = require('react-router')
        router.browserHistory.push('/profile')
      } else {
        this.setState( {invalid: true})
      }
      })

    }
  }

  render() {
    var styleDefault = {
      border: '0px'
    }
    var styleIncorrect = {
      border: 'none',
      borderBottom: '2px solid red',
    }

    const {fields: {userEmail, userPassword}, handleSubmit} = this.props;
    return (
      <div className="entry-container">
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} onKeyUp={this.props.toggleCloseForm}>
            <input className="entry-input-signin"
                   type="text"
                   placeholder="Email Address"
                   style={ this.state.invalid === true ? styleIncorrect : styleDefault }
                   {...userEmail} />
            <input className="entry-input-signin"
                    type="password"
                    placeholder="Password"
                    style={ this.state.invalid === true ? styleIncorrect : styleDefault }
                    {...userPassword}
                    />
            <input type="submit" hidden="hidden" />
        </form>
      </div>
    );
  }
}


export default reduxForm({
  form: 'loginForm',
  fields: ['userEmail', 'userPassword']
}, null, { fetchUserLogin })(SignInBox);
