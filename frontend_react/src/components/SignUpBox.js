import React, { Component, PropTypes } from 'react'
import {reducer as formReducer} from 'redux-form';
import { reduxForm } from 'redux-form'
import  addUser  from '../actions/addUser'




class SignUpBox extends Component {

  handleFormSubmit(props) {
    this.props.addUser(props).then( ()=>{
      var router = require('react-router')
      router.browserHistory.push('/profile')
    })
    debugger
  }

  render() {
    const {fields: {fullName, email}, handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div>
          <label>Full Name</label>
          <input type="text" placeholder="Full Name" {...fullName} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" id="userEmail" placeholder="Email" {...email}/>
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
  form: 'contact',
  fields: ['fullName', 'email']
}, null, { addUser })(SignUpBox);
