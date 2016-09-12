
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import UserExperienceForm from './UserExperienceForm'

const UserExpCont = class extends Component {

  render(){
    const userExperience = this.props.currentUserExperience || ''

    const initialValues = {
      initialValues: {
        experience: userExperience
      }
    }

    return(
      <div className="user-exp-container">
        <UserExperienceForm currentUserId={this.props.currentUserId}
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
