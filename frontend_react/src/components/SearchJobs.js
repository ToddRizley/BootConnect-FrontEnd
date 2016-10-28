import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import fetchJobs from '../actions/fetchJobs'
import fetchFilteredJobs from '../actions/fetchFilteredJobs'
import fetchJobsByDistance from '../actions/fetchJobsByDistance'
import { ListGroup } from 'react-bootstrap'
import { ListGroupItem } from 'react-bootstrap'

const SearchJobs = class extends Component {
  render(){
    return(
      <div>
      <div>Search Jobs Component</div>
        <select id="filterTable-CityJobs" onChange={this.props.fetchFilteredJobs}>
      {this.props.locations.map( (location)=> {
        return(<option>{location}</option>)
        }
      )}
      </select>
      <select id="filterTable-Distance-Jobs" onChange={this.props.fetchJobsByDistance.bind(this, this.props.currentUser.currentUser.attributes.location.city)} >
        <option value="25">25 miles</option>
        <option value="50">50 miles</option>
        <option value="100">100 miles</option>
      </select>
      <ListGroup>
          {this.props.jobList.jobList.map( (job)=> {
                  return(
                    <ListGroupItem href="#" header={job.attributes.title}>
                      <strong>{job.attributes.company}</strong> - {job.attributes.location.city} <a href={"http://" + job.attributes.url} target="_blank">{job.attributes.url}</a>
                    </ListGroupItem>
                    )}
                  )}
      </ListGroup>
    </div>

    )
  }
}


const SearchJobsContainer = connect(mapStateToProps, mapDispatchToProps)(SearchJobs)

function mapStateToProps(state) {
  return {jobList: state.jobList, currentUser: state.currentUser}
}

function mapDispatchToProps(dispatch) {
  return (bindActionCreators({fetchJobs, fetchJobsByDistance, fetchFilteredJobs}, dispatch))
}

export default SearchJobsContainer
