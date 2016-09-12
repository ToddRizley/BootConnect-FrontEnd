import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Interest extends Component {
  render(){
    const interests = this.props.currentUser.currentUser.attributes.interests

    return(
      <div>
      <h3 className="profile-header">Interests</h3>
        <ul>
          { interests.map( (interest) => {
            return <li>
                    <div className="interest-block"> {interest.name} </div>
                    </li>
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
