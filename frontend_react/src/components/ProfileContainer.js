import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import HeaderContainer from './HeaderContainer'
import BodyContainer from './BodyContainer'

const ProfileContainer = class extends Component {
  constructor(props){
    super(props)
    this.state = {edit: false}
  }

  render(){
    return(
      <div>
        <HeaderContainer state={this.state.edit}
        store={console.log('headercontainer - add current user here')}
        />
        <BodyContainer />
      </div>
    )
  }
}

export default ProfileContainer
//Header Container
///user's name
///user's company
///user's location
///user's organization
///user's image
