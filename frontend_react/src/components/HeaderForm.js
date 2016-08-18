import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import updateUser from '../actions/updateUser.js'

class HeaderForm extends Component {

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
    debugger
    event.preventDefault()
    this.setState({
      enabled: !this.state.enabled
    })

    this.props.updateUser(props, this.props.currentUser).then( ()=>{
      var router = require('react-router')
      router.browserHistory.push('/profile')
    })
  }

  render() {

    var city = this.props.currentUser.currentUser.attributes.location.city
    var state = this.props.currentUser.currentUser.attributes.location.state
    var loc = `${city}, ${state}`

    const {fields: {name, position, company, organization, location}, handleSubmit} = this.props;
    var nameInput = this.state.enabled ? <input type="textarea" placeholder="Name" {...name} /> : <input disabled="disabled" type="textarea" placeholder="Name" {...name} />
    var locationInput = this.state.enabled ? <input type="textarea" placeholder="Location" {...location} /> : <input disabled="disabled" type="textarea" placeholder="Location" {...location} />
    var companyInput = this.state.enabled ? <input type="textarea" placeholder="Current Company" {...company} /> : <input disabled="disabled" type="textarea" placeholder="Current Company" {...company} />
    var positionInput = this.state.enabled ? <input type="textarea" placeholder="Current Position" {...position} /> : <input disabled="disabled" type="textarea" placeholder="Current Company" {...position} />
    var submitButton = this.state.enabled ? <input type="submit" value="Submit" /> : <div/>
    return (
      <div className="header">
        <button onClick={this.toggleState.bind(this)}> Edit </button>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          {nameInput}
          {locationInput}
          {companyInput}
          {positionInput}
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
  form: 'userHeader',
  fields: ['name', 'position', 'company', 'organization', 'location']
}, null, { updateUser })(HeaderForm);
