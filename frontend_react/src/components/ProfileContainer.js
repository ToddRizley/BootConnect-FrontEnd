import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import HeaderContainer from './HeaderContainer'
import UserBioContainer from './UserBioContainer'
import UserExperienceContainer from './UserExperienceContainer'
import InterestForm from './InterestForm'
import InterestList from './InterestList'
import JobForm from './JobForm'
import JobList from './JobList'
import ArticleForm from './ArticleForm'
import ArticleList from './ArticleList'
import SearchUsersContainer from './SearchUsers'
import NavbarContainer from './NavbarContainer'
import SearchJobsContainer from './SearchJobs'

const Profile = class extends Component {

  render(){
    return(
      <div>
        <NavbarContainer currentUser={this.props.currentUser} />
        <HeaderContainer currentUser={this.props.currentUser} />
        <br/><br/>
        <UserBioContainer currentUser={this.props.currentUser} />
        <br/><br/>
        <UserExperienceContainer currentUser={this.props.currentUser} />
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
        <br>
        </br>
        <br>
        </br>
        {/* <SearchUsersContainer users={this.props}/> */}
        <SearchJobsContainer users={this.props}/>


      </div>
    )
  }
}


const ProfileContainer = connect(mapStateToProps)(Profile)

function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

export default ProfileContainer
