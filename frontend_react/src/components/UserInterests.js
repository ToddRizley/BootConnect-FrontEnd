import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Interest from './Interest.js'

const UserInterests = class extends Component {
  //map through user interests and render each individual itnerest

  render(){
    return(
      <div>
      <Interest />
      </div>
    )
  }
}

export default UserInterests
