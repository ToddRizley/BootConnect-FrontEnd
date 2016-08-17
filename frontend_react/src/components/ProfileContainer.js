import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import HeaderContainer from './HeaderContainer'
import BodyContainer from './BodyContainer'
//verda@swaniawski.net
//this.props.store.myGetCurrentUser.current_user

const Profile = class extends Component {
  constructor(props){
    super(props)
    this.state = {edit: false}
  }

  render(){
    debugger
    return(
      <div>
        <HeaderContainer current_user={this.store.attributes}/>
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
