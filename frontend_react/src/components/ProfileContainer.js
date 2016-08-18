import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import HeaderForm from './HeaderForm'
import UserBioForm from './UserBioForm.js'
import UserExperienceForm from './UserExperienceForm.js'
import InterestForm from './InterestForm.js'
import InterestList from './InterestList.js'

//verda@swaniawski.net
//this.props.store.myGetCurrentUser.current_user

const Profile = class extends Component {

  render(){
    return(
      <div>
        <HeaderForm currentUser={this.props.currentUser} />
        <br/><br/>
        <UserBioForm currentUser={this.props.currentUser} />
        <br/><br/>
        <UserExperienceForm currentUser={this.props.currentUser} />
        <br/><br/>
        <InterestList currentUser={this.props.currentUser}/>
        <br/>
        <InterestForm currentUser={this.props.currentUser} />
        <br/><br/>
      </div>
    )
  }
}


const ProfileContainer = connect(mapStateToProps)(Profile)

function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

export default ProfileContainer
