import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Profile = class extends Component {

  render(){
    return(
      <div>
        <Link to="/search_users" value={true}>Search Users</Link>
        <Link to="/search_jobs" value={false}>Search Jobs</Link>

      </div>
    )
  }
}


const ProfileContainer = connect(mapStateToProps)(Profile)

function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

export default FilterTableContainer
