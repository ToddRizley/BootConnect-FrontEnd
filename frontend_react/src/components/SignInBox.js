import React, { Component, PropTypes } from 'react'
import {reducer as formReducer} from 'redux-form';
import { reduxForm } from 'redux-form'
import fetchCurrentUser from '../actions/fetchCurrentUser'


class SignInBox extends Component {

  handleFormSubmit(props) {
    let userEmail = props.userEmail.replace('.', '&')
    debugger
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

function mapStateToProps(state) {
  return {store: state.myAddUser.current_user.data}
  }

export default reduxForm({
  form: 'loginForm',
  fields: ['userEmail']
}, null, { fetchCurrentUser })(SignInBox);
