import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import fetchUsers from '../actions/fetchUsers'
import fetchFilteredUsers from '../actions/fetchFilteredUsers'
import fetchUsersByDistance from '../actions/fetchUsersByDistance'
import $ from 'jquery'
import { ListGroup } from 'react-bootstrap'
import { ListGroupItem } from 'react-bootstrap'


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

  handleDistanceChange(){
    var dist = document.getElementById("filterTable-Distance").value.split(" ")[0]
    var city = this.props.currentUser.attributes.location.city
    this.props.fetchUsersByDistance.fetchUsersByDistance(dist, city)
  }

  handleCityChange(){
    debugger
    var city = document.getElementById("filterTable-City").value
    debugger
    this.props.fetchFilteredUsers.fetchFilteredUsers(city)
  }


  render() {
    return(
      <div>
      <select id="filterTable-City" onChange={this.handleCityChange.bind(this)}>
        {this.state.locations.map( (location)=> {
          return(<option>{location}</option>)
          }
        )}
        </select>

        <select id="filterTable-Distance" onChange={this.handleDistanceChange.bind(this)} >
          <option>25 miles</option>
          <option>50 miles</option>
          <option>100 miles</option>
        </select>

        <ListGroup>
            {this.props.userList.userList.map( (user)=> {

              return (
                <ListGroupItem href="#" header={user.attributes.name}>
                  <strong>{user.attributes.company}</strong> - {user.attributes.position} - {user.attributes.location.city}
                </ListGroupItem>
              )}
            )}
        </ListGroup>
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
          fetchUsersByDistance: bindActionCreators({fetchUsersByDistance}, dispatch),
          fetchFilteredUsers: bindActionCreators({fetchFilteredUsers}, dispatch)}
}

export default SearchUsersContainer
