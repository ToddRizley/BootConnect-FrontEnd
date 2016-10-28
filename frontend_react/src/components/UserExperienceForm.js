import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import updateUser from '../actions/updateUser.js'

class UserExperienceForm extends Component {

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
    this.setState({
      disabled: !this.state.disabled
    })

    this.props.updateUser(props, this.props.currentUserId).then( ()=>{
      var router = require('react-router')
      router.browserHistory.push('/profile')
    })
  }

  render() {
    const disabled = this.state.disabled ? 'disabled' : ''
    const hidden = this.state.disabled ? 'hidden' : ''

    const {fields: {experience}, handleSubmit} = this.props

    var buttonStyle = {
      border: 'none',
      fontSize: '1em',
      backgroundColor: '#C0D9AF',
      color: 'fff',
      width: 'auto',
      padding: '10px'
    }


    return (
      <div className="experience">
        <h3 className="profile-header">Experience</h3>

        <form onDoubleClick={this.toggleState.bind(this)}
              onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} >

          <textarea className="exp"
                    disabled={disabled}
                    type="textarea"
                    placeholder="Add Experience"
                    {...experience}
                    />
          <br/>

          {
            this.state.disabled
            ? ''
            : <input style={buttonStyle}
                     type="submit"
                     value="Save"
                    />
          }

        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'userExperience',
  fields: ['experience']
},
null,
{ updateUser })(UserExperienceForm);
