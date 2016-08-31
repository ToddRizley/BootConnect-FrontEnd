import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import removeJob from '../actions/removeJob'
import { ListGroup } from 'react-bootstrap'
import { ListGroupItem } from 'react-bootstrap'

class Job extends Component {


  render(){
    let jobs = this.props.currentUser.currentUser.attributes.jobs


    const jobsList = jobs.map( (job) => {
      return(<ListGroupItem href="#" header={job.title}>{job.company}></ListGroupItem>)
    })

    return(
        <div>
          <ListGroup>
            {jobsList}
          </ListGroup>
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
