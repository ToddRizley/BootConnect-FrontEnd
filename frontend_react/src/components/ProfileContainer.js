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
import {Nav} from 'react-bootstrap'
import {Navbar} from 'react-bootstrap'
import {NavItem} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

const Profile = class extends Component {

  render(){
    return(
      <Row className="profile-wrapper">
        <Col sm={2} md={2}> </Col>

        <Col sm={8} md={8}>
          <Row>
            <Col>
              <NavbarContainer currentUser={this.props.currentUser} />
            </Col>
          </Row>

          <Row>
            <Col sm={2} md={2} className="header-container" >
              <img className="user-profile-image"
                   src={"http://www.filecluster.com/howto/wp-content/uploads/2014/07/User-Default.jpg"} />
            </Col>
            <Col sm={7} md={7} >
              <HeaderContainer currentUser={this.props.currentUser} />
            </Col>
            <Col sm={3} md={3} >
              <img className="user-organization-image"
                   src={"https://avatars0.githubusercontent.com/u/2180076?v=3&s=200"} />
            </Col>
          </Row>

          <Row>
           <Col className="header-container" md={9} >
            <UserBioContainer currentUser={this.props.currentUser} />
            <UserExperienceContainer currentUser={this.props.currentUser} />
           </Col>

           <Col md={3}>
            <InterestList currentUser={this.props.currentUser}/>
            <InterestForm currentUser={this.props.currentUser} />
           </Col>
          </Row>
        </Col>

        <Col sm={2} md={2}> </Col>
      </Row>
    )
  }
}


const ProfileContainer = connect(mapStateToProps)(Profile)

function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

export default ProfileContainer
