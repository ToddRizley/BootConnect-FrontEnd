import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import UserImage from './UserImage.js'
import UserInfo from './UserInfo.js'

const Header = class extends Component {

  render(){
    debugger
    return(

      <div className="header-container">

      </div>
    )
  }
}

/*

attrs = this.props.currentUser.currentUser.attributes

Object.keys(attrs).map(function(value, index) {
console.log(Object.keys(attrs)[index])
console.log( attrs[value])


})
*/
const HeaderContainer = connect(mapStateToProps)(Header)

function mapStateToProps(state) {
  return {store: state.userReducer}
}

export default HeaderContainer
