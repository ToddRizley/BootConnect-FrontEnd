import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Job extends Component {

  render(){
    var jobs = this.props.currentUser.currentUser.attributes.jobs

    return(
      <div>
        Job List
        <ul>
          { jobs.map( (job) => {
            return <li>{job.title} {job.description} {job.url}</li>
          })}
        </ul>
      </div>
    )
  }
}


const JobList = connect(mapStateToProps)(Job)

function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

export default JobList
