import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import fetchCurrentUser from '../actions/fetchCurrentUser'


class SignInBox extends Component {
  handleFormSubmit(props) {
    event.preventDefault()
    debugger
    if (props.userEmail && props.userPassword) {
    let userEmail = props.userEmail.replace('.', '&')
    debugger
      this.props.fetchCurrentUser(userEmail, props.userPassword).then( ()=>{
        var router = require('react-router')
        router.browserHistory.push('/profile')
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
                    {...userPassword} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}


export default reduxForm({
  form: 'loginForm',
  fields: ['userEmail', 'userPassword']
}, null, { fetchCurrentUser })(SignInBox);
