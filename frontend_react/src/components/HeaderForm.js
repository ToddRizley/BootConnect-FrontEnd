import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
// import { Field } from 'redux-form'
import updateUser from '../actions/updateUser.js'

class HeaderForm extends Component {
  constructor(props) {
    super(props)
    this.state = { disabled: true }
  }

  toggleState(){
    this.setState({
      disabled: !this.state.disabled
    })
  }
  /* Toggles the edit/no-edit state for the header */
  handleFormSubmit(props) {
    event.preventDefault()
    this.setState({
      disabled: !this.state.disabled
    })

    /* Pushing back to profile to enforce persistence */
    this.props.updateUser(props, this.props.currentUser).then( ()=>{
      var router = require('react-router')
      router.browserHistory.push('/profile')
    })
  }

  render() {
    var disabled = this.state.disabled ? 'disabled' : ''
    // var hidden = this.state.disabled ? 'hidden' : ''

    const {fields: {name, location, position, company}, handleSubmit} = this.props;
    return (
      <div className="header-form-display">
        <form onDoubleClick={this.toggleState.bind(this)}
              onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

          <input className="header-container"
            disabled={disabled}
            type="textarea"
            placeholder="Full Name"
            {...name} /><br/>
          <input className="header-container"
            disabled={disabled}
            type="textarea"
            placeholder="Location"
            {...location} /><br/>
          <input className="header-container"
            disabled={disabled}
            type="textarea"
            placeholder="Add Current Employer"
            {...company} /><br/>
          <input className="header-container"
            disabled={disabled}
            type="textarea"
            placeholder="Add Position"
            {...position} />
          <br/>
          { this.state.disabled ? '' : <input className="user-profile-save " type="submit" value="Save" /> }
        </form>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return { currentUser: state.currentUser }
//   }

export default reduxForm({
  form: 'userHeader',
  fields: ['name', 'location', 'position', 'company']
},
null,
{ updateUser })(HeaderForm);
