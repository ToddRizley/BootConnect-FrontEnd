import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import addInterest from '../actions/addInterest.js'

class InterestForm extends Component {

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
    debugger
    this.props.addInterest(props, this.props.currentUser).then( ()=>{
      var router = require('react-router')
      router.browserHistory.push('/profile')
    })
  }

  render() {
    const {fields: {name, description}, handleSubmit} = this.props;
    var nameInput = this.state.enabled ? <input type="textarea" placeholder="Add Interest" {...name} /> : <input disabled="disabled" type="textarea" placeholder="Add Interest" {...name} />
    var descriptionInput = this.state.enabled ? <input type="textarea" placeholder="Add Description" {...description} /> : <input disabled="disabled" type="textarea" placeholder="Add Description" {...description} />
    var submitButton = this.state.enabled ? <input type="submit" value="Submit" /> : <div/>

    return (
      <div className="header">
        <button onClick={this.toggleState.bind(this)}> Add </button>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          {nameInput}
          {descriptionInput}
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
  form: 'interestForm',
  fields: ['name', 'description']
}, null, { addInterest })(InterestForm);
