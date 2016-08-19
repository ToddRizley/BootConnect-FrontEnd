import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import addJob from '../actions/addJob.js'

class JobForm extends Component {

  constructor(props) {
    super(props)
    this.state = {enabled: false}
  }

  toggleState(){
    this.setState({
      enabled: !this.state.enabled
    })
  }

  handleFormSubmit(props) {
    event.preventDefault()
    // keep enabled: true
    // this.setState({
    //   enabled: !this.state.enabled
    // })
      debugger
    this.props.addJob(props, this.props.currentUser).then( ()=>{
      var router = require('react-router')
      router.browserHistory.push('/profile')
    })
  }

  render() {
    const {fields: {title, description, url, location}, handleSubmit} = this.props;
    var titleInput = this.state.enabled ? <input type="textarea" placeholder="Job Title" {...title} /> : <input disabled="disabled" type="textarea" placeholder="Job Title" {...title} />
    var descriptionInput = this.state.enabled ? <input type="textarea" placeholder="Description" {...description} /> : <input disabled="disabled" type="textarea" placeholder="Description" {...description} />
    var urlInput = this.state.enabled ? <input type="textarea" placeholder="Link to Posting" {...url} /> : <input disabled="disabled" type="textarea" placeholder="Link to Posting" {...url} />
    var locationInput = this.state.enabled ? <input type="textarea" placeholder="Location" {...location} /> : <input disabled="disabled" type="textarea" placeholder="Location" {...location} />
    //var descriptionInput = this.state.enabled ? <input type="textarea" placeholder="Add Description" {...description} /> : <input disabled="disabled" type="textarea" placeholder="Add Description" {...description} />
    var submitButton = this.state.enabled ? <input type="submit" value="Save" /> : <div/>

    return (
      <div className="header">
      {this.state.enabled ? null : <button onClick={this.toggleState.bind(this)}>Add</button>}
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          {titleInput}
          {descriptionInput}
          {urlInput}
          {locationInput}
          {submitButton}
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { currentUser: state.currentUser }
  }

export default reduxForm({
  form: 'JobForm',
  fields: ['title', 'description', 'url', 'location']
}, null, { addJob })(JobForm);
