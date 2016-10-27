import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import JobForm from './JobForm'
import SearchJobs from './SearchJobs'
import fetchJobs from '../actions/fetchJobs'
import fetchFilteredJobs from '../actions/fetchFilteredJobs'
import fetchJobsByDistance from '../actions/fetchJobsByDistance'
import fetchLocations from '../actions/fetchLocations'
import addJob from '../actions/addJob'
import $ from 'jquery'

class DumbJobContainer extends Component {

  constructor(props){
    super(props)
    this.state = {locations: [] }
  }

  componentWillMount() {
    this.props.fetchJobs().then( (response)=> {
      var newState = response.payload.data.map( (job)=> { return job.attributes.location.city } )
      this.setState({locations: $.uniqueSort(newState)})
      })
    }

    handleFormSubmit(props) {
      event.preventDefault()
      const {resetForm} = this.props
      debugger
      this.props.addJob(this.props).then( ()=>{
        this.props.fetchJobs().then( (response)=> {
          var newState = response.payload.data.map( (job)=> { return job.attributes.location.city } )
          this.setState({locations: $.uniqueSort(newState)})
          }).then( ()=>{
            var router = require('react-router')
            router.browserHistory.push('/dashboard')
            resetForm()
          })
      })
    }


  render() {
    return(
      <div>
        <JobForm handleFormSubmit={this.handleFormSubmit}/>
        <SearchJobs locations={this.state.locations}/>
      </div>
    )
  }
}

const JobContainer = connect(mapStateToProps, mapDispatchToProps)(DumbJobContainer)

function mapStateToProps(state) {
  return {jobList: state.jobList, currentUser: state.currentUser}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addJob, fetchJobs, fetchJobsByDistance, fetchLocations, fetchFilteredJobs}, dispatch);
}

export default JobContainer
