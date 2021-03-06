import React, { Component } from 'react'
import { connect } from 'react-redux'
import ArticleContainer from './ArticleContainer'
import SearchUsersContainer from './SearchUsers'
import NavbarContainer from './NavbarContainer'
import JobContainer from './JobContainer'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Well } from 'react-bootstrap'

const Dashboard = class extends Component {

  render(){
    return(
      <Row className="profile-wrapper">
        <Col sm={2} md={2}>
        </Col>

        <Col sm={8} md={8}>

          <Row>
            <Col sm={12} md={12}>
              <NavbarContainer currentUser={this.props.currentUser.currentUser} />
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={12}>
              <Well bsClass="dash-head"><h2>Connect To The Boot</h2></Well>
            </Col>
          </Row>

          <Row>
            <Col sm={9} md={9}>
              <div className="dashboard-block">
                <h3 className="dashboard-block-head"> Alumni By City</h3>
                <SearchUsersContainer currentUser={this.props.currentUser.currentUser}/>
                <JobContainer currentUser={this.props.currentUser.currentUser} />
              </div>
            </Col>

            <Col sm={3} md={3}>
              <div className="dashboard-block">
                <h3 className="dashboard-block-head"> Articles </h3>
                <ArticleContainer />
              </div>
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
  return {currentUser: state.currentUser, articleList: state.articleList}
}

export default DashboardContainer
