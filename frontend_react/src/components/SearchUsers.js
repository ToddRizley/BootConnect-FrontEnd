import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import fetchUsers from '../actions/fetchUsers'
import fetchFilteredUsers from '../actions/fetchFilteredUsers'
import $ from 'jquery'


const SearchUsers = class extends Component {
  constructor(props){
    super(props)
    this.state = {locations: []}
  }

  componentWillMount() {
    this.props.fetchUsers.fetchUsers().then( (response)=> {
      var newState = response.payload.data.map( (user)=> { return user.attributes.location.city } )
      this.setState({locations: $.uniqueSort(newState)})
    })
    }

  render(){
    return(
      <div>


      <select id="filterTable-City" onChange={this.props.fetchFilteredUsers.fetchFilteredUsers}>
        {this.state.locations.map( (location)=> {
          return(<option>{location}</option>)
          }
        )}
        </select>
        <select id="filterTable-Distance" >
          <option>25 miles</option>
            <option>50 miles</option>
              <option>100 miles</option>
        </select>
        <div>
          <table data-role="table" data-mode="columntoggle" class="ui-responsive ui-shadow" id="myTable" data-filter="true" data-input="#filterTable-City">
          <thead>
            <tr>
              <th data-priority="1">Name</th>
              <th data-priority="2">Company</th>
              <th data-priority="3">Position</th>
              <th data-priority="4">City</th>
              <th data-priority="5">Email</th>
            </tr>
          </thead>
          <tbody>
            {this.props.userList.userList.map( (user)=> {
                    return( <tr>
                        <td>{user.attributes.name}</td>
                        <td>{user.attributes.company}</td>
                        <td>{user.attributes.position}</td>
                        <td>{user.attributes.location.city}</td>
                        <td>{user.attributes["email-address"]}</td>
                      </tr>)
                    }
                    )}

          </tbody>
        </table>
      </div>
  </div>
    )
  }
}


 const SearchUsersContainer = connect(mapStateToProps, mapDispatchToProps)(SearchUsers)

function mapStateToProps(state) {
  return {userList: state.userList}
}

function mapDispatchToProps(dispatch) {
  return { fetchUsers: bindActionCreators({fetchUsers}, dispatch),
          fetchFilteredUsers: bindActionCreators({fetchFilteredUsers}, dispatch)}
}

export default SearchUsersContainer
