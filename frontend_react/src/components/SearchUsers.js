import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import fetchUsers from '../actions/fetchUsers'
import fetchFilteredUsers from '../actions/fetchFilteredUsers'
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

  render(){
    return(
      <div>
        <div className="filter-select-container">
        <select className="filter-selected" id="filterTable-City" onChange={this.props.fetchFilteredUsers.fetchFilteredUsers}>
          {this.state.locations.map( (location)=> {
            return(<option>{location}</option>)
            }
          )}
          </select>
          <select className="filter-selected" id="filterTable-Distance" >
            <option>25 miles</option>
              <option>50 miles</option>
                <option>100 miles</option>
          </select>
          </div>

        <ListGroup>
            {this.props.userList.userList.map( (user)=> {
              return (
                <ListGroupItem href="#" header={user.attributes.name}>
                  <strong>{user.attributes.company}</strong> - {user.attributes.position}
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
          fetchFilteredUsers: bindActionCreators({fetchFilteredUsers}, dispatch)}
}

export default SearchUsersContainer
