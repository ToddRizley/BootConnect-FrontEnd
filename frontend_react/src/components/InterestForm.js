import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import addInterest from '../actions/addInterest.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {
      focus: false,
      interest: ""
    }
  }

  toggleFocus(){
    this.setState({
      focus: !this.state.focus
    })
  }

  handleFormSubmit(event) {
    event.preventDefault()
    // const {resetForm} = this.props
    var interest = this.state.interest

    this.props.addInterest(interest, this.props.currentUserId).then( ()=>{
      var router = require('react-router')
      router.browserHistory.push('/profile')
      this.refs.form.reset()
    })
  }

  updateState(event){
    this.setState( {interest: event.target.value } )
    console.log(event.target.value)
  }

  render() {
    const disabled = this.state.disabled ? 'disabled' : ''
    const hidden = this.state.disabled ? 'hidden' : ''

    var buttonStyle = {
      border: 'none',
      fontSize: '1em',
      backgroundColor: '#C0D9AF',
      color: 'fff',
      width: 'auto',
      padding: '10px'
    }

    return (
      <div className="header">

        <form onSubmit={this.handleFormSubmit.bind(this)}
              ref="form">
          <input type="textarea"
                 hidden={hidden}
                 placeholder="Add Interest"
                 onChange={this.updateState.bind(this)}
                 onFocus={this.toggleFocus.bind(this)}
                 onBlur={this.toggleFocus.bind(this)}
                 />
          <br/>

          {
           this.state.focus
           ? <input style={buttonStyle}
                    type="submit"
                    value="Save"
                    />
           : ''
          }

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
