import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import addUser from '../actions/addUser'




class UserBioForm extends Component {

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
    this.setState({
      enabled: !this.state.enabled
    })
    this.props.addUser(props).then( ()=>{
      var router = require('react-router')
      router.browserHistory.push('/profile')
    })
    debugger
  }

  render() {
    const {fields: {bio}, handleSubmit} = this.props;
    var bioInput = this.state.enabled ? <input type="textarea" placeholder="Well, when I was a girl/boy/larva" {...bio} /> : <input disabled="disabled" type="textarea" placeholder="Well, when I was a girl/boy/larva" {...bio} />
    var submitButton = this.state.enabled ? <input type="submit" value="Submit" /> : <div/>

    return (
      <div className="bio">
      <button onClick={this.toggleState.bind(this)}> Edit </button>
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <label>Tell us about your life! </label>
          { bioInput }
          { submitButton }
      </form>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {store: state.myAddUser.current_user.data}
  }

export default reduxForm({
  form: 'userBio',
  fields: ['bio']
}, null, { addUser })(UserBioForm);
