import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import addInterest from '../actions/addInterest.js'


class InterestForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      disabled: false
    }
  }

  toggleState(){
    this.setState({
      disabled: !this.state.disabled
    })
  }

  handleFormSubmit(props) {
    event.preventDefault()
    const {resetForm} = this.props

    this.props.addInterest(props, this.props.currentUserId).then( ()=>{
      var router = require('react-router')
      router.browserHistory.push('/profile')
      resetForm()
    })
  }

  render() {
    const disabled = this.state.disabled ? 'disabled' : ''
    const hidden = this.state.disabled ? 'hidden' : ''
    const value = this.state.value

    const {fields: {name, description}, handleSubmit} = this.props;

    return (
      <div className="header">

      {
        this.state.disabled
        ?  <button onClick={this.toggleState.bind(this)}>Add </button>
        : null
      }
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <input type="textarea"
                 hidden={hidden}
                 placeholder="Add Interest"
                 {...name}
                 />
         <input className="interest-form-input"
                hidden={hidden}
                type="submit"
                value="Save"
                />
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
  fields: ['name']
}, null, { addInterest })(InterestForm);
