import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import addJob from '../actions/addJob.js'
import fetchJobs from '../actions/fetchJobs'
import fetchLocations from '../actions/fetchLocations'


class JobForm extends Component {
  constructor(props) {
    super(props)
    this.state = {disabled: true}
  }

  toggleState(){
    this.setState({
      disabled: !this.state.disabled
    })
  }


  render() {
    const disabled = this.state.disabled ? 'disabled' : ''
    const hidden = this.state.disabled ? 'hidden' : ''

    const {fields: {title, company, url, location}, handleSubmit} = this.props;

    return (
      <div className="job-form">
      <form onSubmit={handleSubmit(this.props.handleFormSubmit.bind(this))}>
            <input className="job-form-input"
                   type="textarea"
                   placeholder="Title"
                   {...title}
                   />
             <input className="job-form-input"
                    type="textarea"
                    placeholder="company"
                    {...company}
                    />
            <input className="job-form-input"
                   type="textarea"
                   placeholder="location"
                   {...location}
                   />
            <input className="job-form-input"
                   type="textarea"
                   placeholder="Paste Link"
                   {...url}
                   />
            <input className="job-form-input"
                   type="submit"
                   value="Save"
                   />
        </form>
      </div>
    );
  }
}


export default reduxForm({
  form: 'JobForm',
  fields: ['title', 'company', 'url', 'location']
},
null,
{ addJob, fetchJobs, fetchLocations})(JobForm);
