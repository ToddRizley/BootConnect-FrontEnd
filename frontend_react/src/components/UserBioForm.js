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
    this.props.addUser(props).then( ()=>{
      var router = require('react-router')
      router.browserHistory.push('/profile')
    })
    debugger
  }

  render() {
    const {fields: {bio}, handleSubmit} = this.props;
    return (
      <div className="bio">
      <button onClick={this.toggleState.bind(this)}> Edit </button>
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

          <label>Tell us about your life! </label>
          <input type="textarea" placeholder="Well, when I was a girl/boy/larva" {...bio} />
          <input type="submit" value="Submit" />

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
