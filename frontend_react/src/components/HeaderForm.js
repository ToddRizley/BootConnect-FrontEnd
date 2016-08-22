import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { Field } from 'redux-form'
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

    const {fields: {name, location, position, company}, handleSubmit} = this.props;
    return (
      <div className="header-form-display">
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

          <input disabled={disabled}
            type="textarea"
            placeholder="Full Name"
            {...name} />
          <input disabled={disabled}
            type="textarea"
            placeholder="Location"
            {...location} />
          <input disabled={disabled}
            type="textarea"
            placeholder="Add Current Employer"
            {...company} />
          <input disabled={disabled}
            type="textarea"
            placeholder="Add Position"
            {...position} />

          { this.state.disabled
            ? <button onClick={this.toggleState.bind(this)}>Edit</button>
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
  form: 'userHeader',
  fields: ['name', 'location', 'position', 'company']
},
null,
{ updateUser })(HeaderForm);
