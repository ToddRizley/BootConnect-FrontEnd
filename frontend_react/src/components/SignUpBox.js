import React, { Component } from 'react'
import {reducer as formReducer} from 'redux-form';
import { reduxForm } from 'redux-form'
import  addUser  from '../actions/addUser'
import stateList from '../GoogleMapsAPI/stateAbbreviations.js'
import fetchLatLong from  '../actions/fetchLatLong'

class SignUpBox extends Component {
  constructor(props){
    super(props)
    this.state = {invalid: []}
  }
  handleFormSubmit(props) {
    event.preventDefault()
    var divsToStyle = this.validateForm(props)
    if (divsToStyle.length > 0){
    this.setState( { invalid: divsToStyle } )
    debugger
  } else {
    this.props.fetchLatLong(props["city"], props["state"]).then( (response)=> {
      this.props.addUser(props, response.payload).then( (response)=>{
        var userID = response.payload.data.id
        var router = require('react-router')
        router.browserHistory.push(`/users/${userID}`)
      })
    })
  }
  }

  validateForm(props){
    var testArr = Object.values(props)
    var arr = []
    for (let i = 0; i <= 4; i++){
      if (typeof testArr[i] === "undefined" || testArr[i] == "") {
        arr.push(i)
      }
    }
    return arr
  }


  render() {
    var styleDefault = {
      border: '0px'
    }
    var styleIncorrect = {
      border: 'none',
      borderBottom: '2px solid red',
    }
    const {fields: {fullName, email, password, city, state}, handleSubmit} = this.props;
    return (
      <div className="entry-container">
      <form className="entry-input" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} onKeyUp={this.props.toggleCloseForm}>
        <div>
          <input className="entry-input-register"
                  ref="0"
                 type="text"
                 placeholder="Name"
                 style={ this.state.invalid.includes(0) ? styleIncorrect : styleDefault }
                 {...fullName} />
        </div>
        <div>
          <input className="entry-input-register"
                 ref="1"
                 type="email"
                 id="userEmail"
                 placeholder="Email"
                 style={ this.state.invalid.includes(1) ? styleIncorrect : styleDefault }
                 {...email} />
        </div>
        <div>
          <input className="entry-input-register"
                 ref="2"
                 type="password"
                 id="userPassword"
                 placeholder="Password"
                 style={ this.state.invalid.includes(2) ? styleIncorrect : styleDefault }
                 {...password} />
        </div>
        <div>
          <input className="entry-input-register"
                 ref="3"
                 type="city"
                 id="userCity"
                 placeholder="City"
                 style={ this.state.invalid.includes(3) ? styleIncorrect : styleDefault }
                 {...city} />
        </div>
        <div >
          <select className="entry-input-register"
                  ref="4"
                  style={ this.state.invalid.includes(4) ? styleIncorrect : styleDefault }
                  {...state} >
              {stateList.map( (state) => {
               return (
                 <option className="state-dropdown" value={state}> {state} </option>
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
