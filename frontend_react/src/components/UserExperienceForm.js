import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import addUser from '../actions/addUser'




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
    this.setState({enabled: false})
    this.props.addUser(props).then( ()=>{
      var router = require('react-router')
      router.browserHistory.push('/profile')
    })
    debugger
  }

  render() {
    const {fields: {experience}, handleSubmit} = this.props;
    var expInput = this.state.enabled ? <input type="textarea" placeholder="First things first..." {...experience} /> : <input disabled="disabled" type="textarea" placeholder="First things first..." {...experience} />
    var submitButton = this.state.enabled ? <input type="submit" value="Submit" /> : <div/>

    return (
      <div className="bio">
      <button onClick={this.toggleState.bind(this)}> Edit </button>
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <label> Share your experiences! </label>
          { expInput }
          { submitButton }
      </form>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {currentUser: state.currentUser}
  }

export default reduxForm({
  form: 'userExperience',
  fields: ['experience']
}, null, { addUser })(UserExperienceForm);
