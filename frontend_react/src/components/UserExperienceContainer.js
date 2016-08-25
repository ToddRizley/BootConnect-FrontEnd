
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import UserExperienceForm from './UserExperienceForm'

const UserExpCont = class extends Component {

  render(){
    var userExperience = this.props.currentUser.currentUser.attributes.experience || ''

    var initialValues = {
      initialValues: {
        experience: userExperience
      }
    }

    return(
      <div className="user-exp-container">
        <UserExperienceForm currentUser={this.props.currentUser}
          {...initialValues}
        />
      </div>
    )
  }
}

const UserExperienceContainer = connect(mapStateToProps)(UserExpCont)

function mapStateToProps(state) {
  return {store: state.userReducer}
}

export default UserExperienceContainer
