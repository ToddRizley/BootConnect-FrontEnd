import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const UserInfo = class extends Component {

  render(){
    return(
      <div>
      <div> UserName </div>
      <div> UserCompany </div>
      <div> UserLocation </div>
      <div> UserOrg </div>
      </div>
    )
  }
}

export default UserInfo
