import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import HeaderContainer from './HeaderContainer'
import BodyContainer from './BodyContainer'
//verda@swaniawski.net
//this.props.store.myGetCurrentUser.current_user

const Profile = class extends Component {


  render(){
    debugger
    console.log(this.props.store)
    return(
      <div>
        <HeaderContainer current_user={this.props.store}/>
        <BodyContainer />
      </div>
    )
  }
}


const ProfileContainer = connect(mapStateToProps)(Profile)

function mapStateToProps(state) {
  return {store: state.myGetCurrentUser.current_user.data}
}

export default ProfileContainer
