import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import UserImage from './UserImage.js'
import UserInfo from './UserInfo.js'
import HeaderForm from './HeaderForm'

const Header = class extends Component {

  render(){
    var userName = this.props.currentUser.currentUser.attributes.name
    var userLocation = `${this.props.currentUser.currentUser.attributes.location.city}, ${this.props.currentUser.currentUser.attributes.location.state}`
    var userCompany = this.props.currentUser.currentUser.attributes.company || ''
    var userPosition = this.props.currentUser.currentUser.attributes.position || ''
    //refactor using destructured object

    var initialValues = {
      initialValues: {
        name: userName,
        location: userLocation,
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
