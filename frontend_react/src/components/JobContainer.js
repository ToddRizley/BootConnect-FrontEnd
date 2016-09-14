import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import JobForm from './JobForm'
import SearchJobs from './SearchJobs'
import removeArticle from '../actions/removeArticle'
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
      this.props.addJob(props).then( ()=>{
        this.props.fetchJobs().then( (response)=> {
          var newState = response.payload.data.map( (job)=> { return job.attributes.location.city } )
          this.setState({locations: $.uniqueSort(newState)})
          })
        resetForm()
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
  return {jobList: state.jobList}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addJob, fetchJobs, fetchJobsByDistance, fetchLocations, fetchFilteredJobs}, dispatch);
}

export default JobContainer
