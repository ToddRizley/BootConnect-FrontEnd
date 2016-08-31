import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import removeJob from '../actions/removeJob'

class Job extends Component {


  render(){
    let jobs = this.props.currentUser.currentUser.attributes.jobs


    const jobsList = jobs.map( (job) => {
      return(<li>{job.title}></li>)
    })

    return(
        <div>
          Job List...
          <ul>
            {jobsList}
          </ul>
        </div>
      )
  }
}


const JobList = connect(mapStateToProps, mapDispatchToProps)(Job)

function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

function mapDispatchToProps(dispatch) {
  return  {removeJob: bindActionCreators({removeJob}, dispatch)}
}

export default JobList



// {job.title} {job.description} {job.url} {job.location.city}<button>X</button>
