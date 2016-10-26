import React, { Component } from 'react'
import { connect } from 'react-redux'
import HeaderContainer from './HeaderContainer'
import UserBioContainer from './UserBioContainer'
import UserExperienceContainer from './UserExperienceContainer'
import InterestForm from './InterestForm'
import InterestList from './InterestList'
import NavbarContainer from './NavbarContainer'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import removeInterest from '../actions/removeInterest.js'
import { bindActionCreators } from 'redux'

const Profile = class extends Component {

  render(){
    return(
      <Row className="profile-wrapper">
        <Col sm={2} md={2}>
        </Col>

        <Col sm={8} md={8}>
          <Row>
            <Col>
              <NavbarContainer currentUser={this.props.currentUser.currentUser} />
            </Col>
          </Row>

          <Row>
            <Col sm={2} md={2} className="header-container" >
              <img className="user-profile-image"
                   src={"http://www.filecluster.com/howto/wp-content/uploads/2014/07/User-Default.jpg"}
                   role="presentation"
                   />
            </Col>
            <Col sm={7} md={7} >
              <HeaderContainer currentUser={this.props.currentUser} />
            </Col>
            <Col sm={3} md={3} >
              <img className="user-organization-image"
                   src={"https://avatars0.githubusercontent.com/u/2180076?v=3&s=200"}
                   role="presentation"
                   />
            </Col>
          </Row>

          <Row>
           <Col className="header-container" md={9} >
            <UserBioContainer currentUserBio={this.props.currentUser.currentUser.attributes.bio} currentUserId={this.props.currentUser.currentUser.id} />
            <UserExperienceContainer currentUserExperience={this.props.currentUser.currentUser.attributes.experience} currentUserId={this.props.currentUser.currentUser.id} />
           </Col>

           <Col md={3}>
            <InterestList currentUserId={this.props.currentUser.currentUser.id} />
            <InterestForm currentUserId={this.props.currentUser.currentUser.id} />
           </Col>
          </Row>
        </Col>

        <Col sm={2} md={2}> </Col>
      </Row>
    )
  }
}


const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({removeInterest}, dispatch);
}


export default ProfileContainer
