import React, { Component, PropTypes } from 'react'
import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import { reduxForm } from 'redux-form'
export const fields = [ 'firstName', 'lastName', 'email', 'sex', 'favoriteColor', 'employed', 'notes' ]


class ContactForm extends Component {

  handleFormSubmit(){
  }

  render() {
    const {fields: {firstName, lastName, email}, handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div>
          <label>First Name</label>
          <input type="text" placeholder="First Name" {...firstName} />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" {...lastName} />
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

export default reduxForm({
  form: 'contact',
  fields: ['firstName', 'lastName', 'email']
}, null, {formReducer})(ContactForm);
