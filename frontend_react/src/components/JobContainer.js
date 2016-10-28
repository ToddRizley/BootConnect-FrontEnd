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
import axios from 'axios'

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
      const API_KEY = "&key=AIzaSyByc29-KtwjrhnW6hwmyXeeWKyi2Asumyw"
      var city_info = props.location.split(",")[0].split(" ").length > 1 ? props.location.split(",")[0].join("+") : props.location.split(",")[0]
      var state_info = props.location.split(",")[1]
      const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + city_info + "+" + state_info + API_KEY
      axios.get(url).then( (response)=> {
      var coords = response.data.results[0].geometry.location
      this.props.addJob(this.props, coords).then( ()=>{
        debugger
        this.props.fetchJobs().then( (response)=> {
          debugger
          var newState =  response.payload.data.map( (job)=> { return job.attributes.city } )

          this.setState({locations: $.uniqueSort(newState)})
        })
      })
          }).then( ()=>{
            var router = require('react-router')
            router.browserHistory.push('/dashboard')
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
  return {jobList: state.jobList, currentUser: state.currentUser}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addJob, fetchJobs, fetchJobsByDistance, fetchLocations, fetchFilteredJobs}, dispatch);
}

export default JobContainer
