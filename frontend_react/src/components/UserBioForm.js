import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import updateUser from '../actions/updateUser.js'
import fetchInterests from '../actions/fetchInterests.js'

class UserBioForm extends Component {
  constructor(props) {
    super(props)
    this.state = { disabled: true }
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

    const {fields: {bio}, handleSubmit} = this.props;
    return (
      <div className="user-bio-display">
        <h3 className="profile-header">Bio</h3>
        <form onDoubleClick={this.toggleState.bind(this)}
              onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

          <textarea className="bio"
            disabled={disabled}
            type="textarea"
            placeholder="Add Bio"
            {...bio}
          />
          <br/>
          { this.state.disabled
            ? ''
            : <input className="user-profile-save" type="submit" value="Save" />
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
  form: 'userBio',
  fields: ['bio']
  },
  null,
  { updateUser, fetchInterests })(UserBioForm);
