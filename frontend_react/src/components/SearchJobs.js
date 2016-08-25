import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import fetchJobs from '../actions/fetchJobs'
import fetchFilteredJobs from '../actions/fetchFilteredJobs'
import $ from 'jquery'

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
        <select id="filterTable-CityJobs" onChange={this.props.fetchFilteredJobs.fetchFilteredJobs}>
      {this.state.locations.map( (location)=> {
        return(<option>{location}</option>)
        }
      )}

  </select>
    <div>
      <table data-role="table" data-mode="columntoggle" class="ui-responsive ui-shadow" id="myTable" data-filter="true" data-input="#filterTable-CityJobs">
        <thead>
          <tr>
            <th data-priority="1">Position</th>
            <th data-priority="2">Company</th>
            <th data-priority="3">City</th>
            <th data-priority="4">URL</th>
          </tr>
        </thead>
        <tbody>
          {this.props.jobList.jobList.map( (job)=> {
                  return( <tr>
                      <td>{job.attributes.title}</td>
                      <td>{job.attributes.company}</td>
                      <td>{job.attributes.location.city}</td>
                      <td><a href={"http://" + job.attributes.url} target="_blank">{job.attributes.url}</a></td>
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


 const SearchJobsContainer = connect(mapStateToProps, mapDispatchToProps)(SearchJobs)

function mapStateToProps(state) {
  return {jobList: state.jobList}
}

function mapDispatchToProps(dispatch) {
  return { fetchJobs: bindActionCreators({fetchJobs}, dispatch),
          fetchFilteredJobs: bindActionCreators({fetchFilteredJobs}, dispatch)}
}

export default SearchJobsContainer
