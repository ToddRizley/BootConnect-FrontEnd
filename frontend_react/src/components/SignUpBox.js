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

    const {fields: {fullName, email, password, city, state}, handleSubmit} = this.props;
    return (
      <div className="entry-container">
      <form className="entry-input" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} onKeyUp={this.props.toggleCloseForm}>
        <div>
          <input className="entry-input-register"
                 type="text"
                 placeholder="Name"
                 {...fullName} />
        </div>
        <div>
          <input className="entry-input-register"
                 type="email"
                 id="userEmail"
                 placeholder="Email"
                 {...email} />
        </div>
        <div>
          <input className="entry-input-register"
                 type="password"
                 id="userPassword"
                 placeholder="Password"
                 {...password} />
        </div>
        <div>
          <input className="entry-input-register"
                 type="city"
                 id="userCity"
                 placeholder="City"
                 {...city} />
        </div>
        <div >
          <select className="entry-input-register"
                  {...state} >
              {stateList.map( (state) => {
               return (
                 <option value={state}> {state} </option>
                )
               })
              }
          </select>
        </div>
        <input hidden="hidden" type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}


export default reduxForm({
  form: 'signUpForm',
  fields: ['fullName', 'email', 'password', 'city', 'state']
}, null, { addUser, fetchLatLong })(SignUpBox);
