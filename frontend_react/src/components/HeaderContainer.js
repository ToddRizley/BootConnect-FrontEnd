import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import UserImage from './UserImage.js'
import UserInfo from './UserInfo.js'

const HeaderContainer = class extends Component {

  render(){
    return(
      <div className="header-container">
        HeaderContainer....
        <UserImage/>
        <UserInfo/>
      </div>
    )
  }
}

export default HeaderContainer
//Header Container
///user's name
///user's company
///user's location
///user's organization
///user's image
