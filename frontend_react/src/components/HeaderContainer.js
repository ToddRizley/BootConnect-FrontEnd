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
        HeaderContainer....
        {this.props.store.current_user.attributes.name}
      </div>
    )
  }
}
const HeaderContainer = connect(mapStateToProps)(Header)

function mapStateToProps(state) {
  return {store: state.myAddUser}
}

export default HeaderContainer
