import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import addJob from '../actions/addJob.js'
import fetchCurrentUser from '../actions/fetchCurrentUser'

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

  handleFormSubmit(props) {
    event.preventDefault()

    this.props.addJob(props, this.props.currentUserId).then( ()=>{
      this.props.fetchCurrentUser(this.props.currentUser)
    })
  }

  render() {
    const disabled = this.state.disabled ? 'disabled' : ''
    const hidden = this.state.disabled ? 'hidden' : ''

    const {fields: {title, description, url, location}, handleSubmit} = this.props;

    return (
      <div className="job-form">

      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <input className="job-form-input"
                   type="textarea"
                   placeholder="Title"
                   {...title}
                   />
             <input className="job-form-input"
                    type="textarea"
                    placeholder="Desription"
                    {...description}
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
  fields: ['title', 'description', 'url', 'location']
},
null,
{ addJob, fetchCurrentUser })(JobForm);
