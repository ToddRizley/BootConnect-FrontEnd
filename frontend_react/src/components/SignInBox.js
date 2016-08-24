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
      <div className="entry-container">
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <input className="entry-input"
                   type="text"
                   placeholder="Email Address"
                   {...userEmail} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}


export default reduxForm({
  form: 'loginForm',
  fields: ['userEmail']
}, null, { fetchCurrentUser })(SignInBox);
