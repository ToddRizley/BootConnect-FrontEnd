import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import HeaderForm from './HeaderForm'

const Header = class extends Component {

  render(){

    //refactor using destructured object

    const initialValues = {
      initialValues: {
        name: (this.props.currentUser.currentUser.attributes.name),
        location: (`${this.props.currentUser.currentUser.attributes.location.city}, ${this.props.currentUser.currentUser.attributes.location.state}`),
        company: (this.props.currentUser.currentUser.attributes.company || ''),
        position: (this.props.currentUser.currentUser.attributes.position || '')
      }
    }

    return(
      <div className="header-container">
        <HeaderForm currentUser={this.props.currentUser}
          {...initialValues}
        />
      </div>
    )
  }
}

const HeaderContainer = connect(mapStateToProps)(Header)

function mapStateToProps(state) {
  return {store: state.userReducer}
}

export default HeaderContainer
