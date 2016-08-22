import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import UserImage from './UserImage.js'
import UserInfo from './UserInfo.js'
import HeaderForm from './HeaderForm'

const Header = class extends Component {

  render(){
    var userCompany = this.props.currentUser.currentUser.attributes.company || ''
    var userPosition = this.props.currentUser.currentUser.attributes.position || ''

    var initialValues = {
      initialValues: {
        name: this.props.currentUser.currentUser.attributes.name,
        company: userCompany,
        position: userPosition
      }
    }

    return(
      <div className="header-container">
        <HeaderForm currentUser={this.props.currentUser}
          {...initialValues}
        />
      </div>
    )
  }
}

const HeaderContainer = connect(mapStateToProps)(Header)

function mapStateToProps(state) {
  return {store: state.userReducer}
}

export default HeaderContainer
