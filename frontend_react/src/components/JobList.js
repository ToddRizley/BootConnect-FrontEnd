import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import removeJob from '../actions/removeJob'

class Job extends Component {

  render(){
    let jobs = this.props.currentUser.currentUser.attributes.jobs
    debugger

    return(
      <div>
        Job List
        <ul>
          { jobs.map( (job) => {
            return
            <li>{job.title} {job.description} {job.url} {job.location.city}<button onClick={this.props.removeJob.removeJob.bind(this)} className="delete">X</button> </li>
          })}
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
