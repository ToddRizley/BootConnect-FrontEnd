import React, { Component, PropTypes } from 'react'
import {reducer as formReducer} from 'redux-form';
import { reduxForm } from 'redux-form'
import  addUser  from '../actions/addUser'
import stateList from '../GoogleMapsAPI/stateAbbreviations.js'
import fetchLatLong from  '../actions/fetchLatLong'

class SignUpBox extends Component {
  handleFormSubmit(props) {
    event.preventDefault()

    this.props.fetchLatLong(props["city"], props["state"]).then( (response)=> {
      this.props.addUser(props, response.payload).then( ()=>{
        var router = require('react-router')
        router.browserHistory.push('/profile')
      })
    })
  }

  render() {

    const {fields: {fullName, email, city, state}, handleSubmit} = this.props;
    return (
      <form className="entry-input" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div>
          <label>Full Name</label>
          <input type="text" placeholder="Full Name" {...fullName} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" id="userEmail" placeholder="Email" {...email}/>
        </div>
        <div>
          <label>City</label>
          <input type="city" id="userCity" placeholder="City" {...city}/>
          <label>State</label>
          <select {...state}>
              {stateList.map( (state) => {
               return (<option value={state}> {state} </option>)
                })
              }
          </select>
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


export default reduxForm({
  form: 'signUpForm',
  fields: ['fullName', 'email', 'city', 'state']
}, null, { addUser, fetchLatLong })(SignUpBox);
