import React, { Component, PropTypes } from 'react'
import {reducer as formReducer} from 'redux-form';
import { reduxForm } from 'redux-form'
import fetchCurrentUser from '../actions/fetchCurrentUser'


class SignInBox extends Component {
  handleFormSubmit(props) {
    event.preventDefault()
    let userEmail = props.userEmail.replace('.', '&')
    this.props.fetchCurrentUser(userEmail)
  }

  render() {
    const {fields: {userEmail}, handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div>
          <label>Email pls</label>
          <input type="text" placeholder="Enter your Email@!!" {...userEmail} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


export default reduxForm({
  form: 'loginForm',
  fields: ['userEmail']
}, null, { fetchCurrentUser })(SignInBox);
