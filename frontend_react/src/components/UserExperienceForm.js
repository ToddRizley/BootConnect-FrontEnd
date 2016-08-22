import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import updateUser from '../actions/updateUser.js'

class UserExperienceForm extends Component {

  constructor(props) {
    super(props)
    this.state = {disabled: false}
  }

  toggleState(){
    this.setState({
      disabled: !this.state.disabled
    })
  }

  handleFormSubmit(props) {
    event.preventDefault()
    this.setState({
      disabled: !this.state.disabled
    })

    this.props.updateUser(props, this.props.currentUser).then( ()=>{
      var router = require('react-router')
      router.browserHistory.push('/profile')
    })
  }

  render() {
    var disabled = this.state.disabled ? 'disabled' : ''
    var hidden = this.state.disabled ? 'hidden' : ''

    const {fields: {experience}, handleSubmit} = this.props;
    return (
      <div className="experience">

        Experience

        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

          <input disabled={disabled}
            type="textarea"
            placeholder="Add Experience"
            {...experience}
          />

          { this.state.disabled
            ? <button onClick={this.toggleState.bind(this)}> Edit </button>
            : <input type="submit" value="Save" />
          }
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
