import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Interest extends Component {
  render(){
    var interests = this.props.currentUser.currentUser.attributes.interests
    return(
      <div>
        Interest List..
        <ul>
        { interests.map( (interest) => {
          return <li> {interest.name} </li>
          })
        }
        </ul>
      </div>
    )
  }
}


const InterestList = connect(mapStateToProps)(Interest)

function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

export default InterestList
