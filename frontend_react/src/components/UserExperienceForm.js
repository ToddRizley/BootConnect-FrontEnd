import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import updateUser from '../actions/updateUser.js'

class UserExperienceForm extends Component {

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
    this.setState({
      enabled: !this.state.enabled
    })
    debugger
    this.props.updateUser(props, this.props.currentUser).then( ()=>{
      var router = require('react-router')
      router.browserHistory.push('/profile')
    })
  }

  render() {
    const {fields: {experience}, handleSubmit} = this.props;
    var experienceInput = this.state.enabled ? <input type="textarea" placeholder="Well, when I was a girl/boy/larva" {...experience} /> : <input disabled="disabled" type="textarea" placeholder="Well, when I was a girl/boy/larva" {...experience} />
    var submitButton = this.state.enabled ? <input type="submit" value="Submit" /> : <div/>

    return (
      <div className="experience">
      <button onClick={this.toggleState.bind(this)}> Edit </button>
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <label>Tell us about your life! </label>
          { experienceInput }
          { submitButton }
      </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { currentUser: state.currentUser }
  }

export default reduxForm({
  form: 'userExperience',
  fields: ['experience']
}, null, { updateUser })(UserExperienceForm);
