import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import HeaderForm from './HeaderForm'
import UserBioForm from './UserBioForm'
import UserExperienceForm from './UserExperienceForm'
import InterestForm from './InterestForm'
import InterestList from './InterestList'
import JobForm from './JobForm'
import JobList from './JobList'
import ArticleForm from './ArticleForm'
import ArticleList from './ArticleList'
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
        <JobForm currentUser={this.props.currentUser} />
        <br/><br/>
        <JobList currentUser={this.props.currentUser} />
        <br/><br/>
        <ArticleForm currentUser={this.props.currentUser} />
        <br/><br/>
        <ArticleList currentUser={this.props.currentUser} />
      </div>
    )
  }
}


const ProfileContainer = connect(mapStateToProps)(Profile)

function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

export default ProfileContainer
