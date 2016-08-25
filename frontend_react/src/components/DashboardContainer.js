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
import { Well } from 'react-bootstrap'

const Dashboard = class extends Component {

  render(){
    return(
      <Row className="profile-wrapper">
        <Col sm={2} md={2}>
        </Col>

        <Col sm={8} md={8}>

          <Row>
            <Col sm={12} med={12}>
              <NavbarContainer currentUser={this.props.currentUser} />
            </Col>
          </Row>

          <Row>
            <Col sm={12} med={12}>
              <Well bsClass="dash-head"><h2>Connect To The Boot</h2></Well>
            </Col>
          </Row>

          <Row>
            <Col sm= {9} md={9}>
              <div className="dashboard-block">
                <h3 className="dashboard-block-header"> Search Alumni By Location </h3>
                <SearchUsersContainer currentUser={this.props.currentUser}/>
              </div>
            </Col>

            <Col sm= {3} md={3}>
            <ArticleList currentUser={this.props.currentUser}/>
            <SearchJobsContainer currentUser={this.props.currentUser} />

            </Col>
          </Row>
       </Col>

       <Col sm={2} md={2}>
       </Col>
    </Row>

    )
  }
}

const DashboardContainer = connect(mapStateToProps)(Dashboard)

function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

export default DashboardContainer
