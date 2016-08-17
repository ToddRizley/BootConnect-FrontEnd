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
    console.log(this.props.store)
    return(
      <div>
        <UserBioForm />
        <UserExperienceForm />
      </div>
    )
  }
}


const ProfileContainer = connect(mapStateToProps)(Profile)

function mapStateToProps(state) {
  return {store: state.currentUser}
}

export default ProfileContainer
