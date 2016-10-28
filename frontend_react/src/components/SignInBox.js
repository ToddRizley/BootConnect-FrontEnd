import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import fetchUserLogin from '../actions/fetchUserLogin'


class SignInBox extends Component {
  handleFormSubmit(props) {
    event.preventDefault()
    if (props.userEmail && props.userPassword) {
    let userEmail = props.userEmail.replace('.', '&')
      this.props.fetchUserLogin(userEmail, props.userPassword).then( (response)=>{

      if (response.payload.data) {
        var router = require('react-router')
        router.browserHistory.push('/profile')
      }
      })

    }
  }

  render() {

    const {fields: {userEmail, userPassword}, handleSubmit} = this.props;
    return (
      <div className="entry-container">
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} onKeyUp={this.props.toggleCloseForm}>
            <input className="entry-input-signin"
                   type="text"
                   placeholder="Email Address"
                   {...userEmail} />
            <input className="entry-input-signin"
                    type="password"
                    placeholder="Password"
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
