import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Interest from './Interest.js'
import InterestForm from './InterestForm'

/* Is this a necessary component? */

const UserInterests = class extends Component {
  //map through user interests and render each individual itnerest

  render(){
    return(
      <div>
      UserInterests
      <InterestForm />
      ..Form
      </div>
    )
  }
}

export default UserInterests
