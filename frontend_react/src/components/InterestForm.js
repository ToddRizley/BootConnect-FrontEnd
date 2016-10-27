import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import addInterest from '../actions/addInterest.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {
      disabled: false,
      interest: ""
    }
  }

  toggleState(){
    this.setState({
      disabled: !this.state.disabled
    })
  }

  handleFormSubmit(event) {
    event.preventDefault()
    const {resetForm} = this.props
    var interest = this.state.interest

    this.props.addInterest(interest, this.props.currentUserId).then( ()=>{
      var router = require('react-router')
      router.browserHistory.push('/profile')
      this.refs.form.reset()
    })
  }

  updateState(event){
    this.setState( { interest: event.target.value } )
    console.log(event.target.value)
  }

  render() {
    const disabled = this.state.disabled ? 'disabled' : ''
    const hidden = this.state.disabled ? 'hidden' : ''
    var style = {
    borderRadius: '8px',
    fontSize: '.8em',
    textAlign: 'center',
    backgroundColor: 'blue',
    width: '4em',
    color: 'white'
    }
    // const value = this.state.value


    return (
      <div className="header">

      {
        this.state.disabled
        ?  <button onClick={this.toggleState.bind(this)}>Add </button>
        : null
      }
        <form onSubmit={this.handleFormSubmit.bind(this)} ref="form">
          <input type="textarea"
                 hidden={hidden}
                 placeholder="Add Interest"
                 onChange={this.updateState.bind(this)}
                 />
         <input className="interest-form-input"
                style={style}
                hidden={hidden}
                type="submit"
                value="Save"
                />
        </form>
      </div>
    );
  }
}

const InterestForm = connect(mapStateToProps, mapDispatchToProps)(Form)

function mapStateToProps(state) {
  return { currentUser: state.currentUser }
  }


  function mapDispatchToProps(dispatch) {
    return bindActionCreators({addInterest}, dispatch);
  }


export default InterestForm
