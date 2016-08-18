import React, { Component, PropTypes } from 'react'
import fetchInterests from '../actions/fetchInterests'
//import updateUser from '../actions/updateUser.js'


class InterestList extends Component {
  render(){
    debugger
    var interests = this.props.currentUser.currentUser.attributes.interests
    //[Objectcreated_at: "2016-08-18T20:13:54.127Z"description: nullid: 54name: "soccer"updated_at: "2016-08-18T20:13:54.127Z"__proto__: Object]

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

export default InterestList
