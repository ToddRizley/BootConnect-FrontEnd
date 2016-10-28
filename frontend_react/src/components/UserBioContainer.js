import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import UserBioForm from './UserBioForm'

const DumbUserBioContainer = class extends Component {

  render(){

    var userBio = this.props.currentUserBio || ''

    var initialValues = {
      initialValues: {
        bio: userBio
      }
    }

    return(
      <div className="user-bio-container">
        <UserBioForm currentUserId={this.props.currentUserId}
          {...initialValues}
        />
      </div>
    )
  }
}

const UserBioContainer = connect(mapStateToProps)(DumbUserBioContainer)

function mapStateToProps(state) {
  return {store: state.userReducer}
}

export default UserBioContainer
