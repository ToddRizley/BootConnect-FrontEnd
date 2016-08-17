import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import HeaderContainer from './HeaderContainer'
import BodyContainer from './BodyContainer'
import UserBioForm from './UserBioForm.js'
import UserExperienceForm from './UserExperienceForm.js'
//verda@swaniawski.net
//this.props.store.myGetCurrentUser.current_user

const Profile = class extends Component {
  render(){
    debugger
    return(
      <div>
        <UserBioForm currentUser=  {this.props.currentUser} />
        <UserExperienceForm currentUser=  {this.props.currentUser} />
      </div>
    )
  }
}


const ProfileContainer = connect(mapStateToProps)(Profile)

function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

export default ProfileContainer
