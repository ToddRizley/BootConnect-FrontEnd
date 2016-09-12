import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import fetchJobs from '../actions/fetchJobs'
import fetchFilteredJobs from '../actions/fetchFilteredJobs'
import fetchJobsByDistance from '../actions/fetchJobsByDistance'
import $ from 'jquery'
import { ListGroup } from 'react-bootstrap'
import { ListGroupItem } from 'react-bootstrap'

const SearchJobs = class extends Component {
  constructor(props){
    super(props)
    this.state = {locations: [] }
  }


  componentWillMount() {
    this.props.fetchJobs.fetchJobs().then( (response)=> {
      var newState = response.payload.data.map( (job)=> { return job.attributes.location.city } )
      this.setState({locations: $.uniqueSort(newState)})
      })
    }

  render(){
    return(
      <div>
      <div>Search Jobs Component</div>
        <select id="filterTable-CityJobs" onChange={this.props.fetchFilteredJobs.fetchFilteredJobs}>
      {this.state.locations.map( (location)=> {
        return(<option>{location}</option>)
        }
      )}
      </select>
      <select id="filterTable-Distance-Jobs" onChange={this.props.fetchJobsByDistance.fetchJobsByDistance.bind(this, this.props.currentUserCity)} >
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
  return {jobList: state.jobList}
}

function mapDispatchToProps(dispatch) {
  return { fetchJobs: bindActionCreators({fetchJobs}, dispatch),
          fetchJobsByDistance: bindActionCreators({fetchJobsByDistance}, dispatch),
          fetchFilteredJobs: bindActionCreators({fetchFilteredJobs}, dispatch)}
}

export default SearchJobsContainer
