import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import removeInterest from '../actions/removeInterest.js'

class Interest extends Component {

  handleDelete(props){
    var userId = this.props.currentUser.currentUser.id
    var interestId = props.id
    this.props.removeInterest(userId, interestId)
  }

  render(){
    var interests = this.props.currentUser.currentUser.attributes.interests
    debugger
    var style = {
      display: 'inline-block',
      borderRadius: '8px',
      width: '2em',
      textAlign: 'center',
      fontSize: '.8em',
      color: 'white',
      backgroundColor: 'blue',
      verticalAlign: 'middle'

    }

    return(
      <div>
      <h3 className="profile-header">Interests</h3>
        <ul>
          { interests.map( (interest) => {
            return <li>
                    <div className="interest-block"> {interest.name} <button type="button" style={style} onClick={this.handleDelete.bind(this, interest)}>X</button> </div>
                   </li>
            })
          }
        </ul>
      </div>
    )
  }
}

const InterestList = connect(mapStateToProps, mapDispatchToProps)(Interest)

function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({removeInterest}, dispatch);
}


export default InterestList
