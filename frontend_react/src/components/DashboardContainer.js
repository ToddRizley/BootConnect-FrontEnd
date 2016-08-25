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

const Dashboard = class extends Component {
  render(){
    return(
      <div className="profile-wrapper">
      <Row>
        <Col>
          <NavbarContainer currentUser={this.props.currentUser} />
        </Col>
      </Row>
       <Col md={4} >
        <SearchJobsContainer currentUser={this.props.currentUser} />
       </Col>
       <Col md={4}>
        <ArticleList currentUser={this.props.currentUser}/>
       </Col>
       <Col md={4}>
        <SearchUsersContainer currentUser={this.props.currentUser}/>
       </Col>

      </div>
    )
  }
}

const DashboardContainer = connect(mapStateToProps)(Dashboard)

function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

export default DashboardContainer
