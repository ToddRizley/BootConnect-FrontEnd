import React, { Component, PropTypes } from 'react'
import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import { reduxForm } from 'redux-form'
import  addUser  from '../actions/addUser'



//

class ContactForm extends Component {

  handleFormSubmit(props) {
    debugger
    this.props.addUser(props)
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
          <input type="email" placeholder="Email" {...email}/>
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default reduxForm({
  form: 'contact',
  fields: ['fullName', 'email']
}, null, { addUser })(ContactForm);
