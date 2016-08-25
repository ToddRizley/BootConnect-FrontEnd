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
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

const Profile = class extends Component {

  render(){
    return(
      <div className="profile-wrapper">
        <Row>
            <NavbarContainer currentUser={this.props.currentUser} />
        </Row>

        <Row>
          <Col md={3} >
            User Image
          </Col>
          <Col md={6} >
            <HeaderContainer currentUser={this.props.currentUser} />
          </Col>
          <Col md={3} >
            Organization
          </Col>
        </Row>

        <Row>
         <Col md={9} >
          <UserBioContainer currentUser={this.props.currentUser} />
          <UserExperienceContainer currentUser={this.props.currentUser} />
         </Col>

         <Col md={3}>
          <InterestList currentUser={this.props.currentUser}/>
          <InterestForm currentUser={this.props.currentUser} />
         </Col>
        </Row>

        <Row>
         <JobForm currentUser={this.props.currentUser} />
         <JobList currentUser={this.props.currentUser} />
         <ArticleForm currentUser={this.props.currentUser} />
         <ArticleList currentUser={this.props.currentUser} />
        </Row>
      </div>
    )
  }
}


const ProfileContainer = connect(mapStateToProps)(Profile)

function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

export default ProfileContainer
