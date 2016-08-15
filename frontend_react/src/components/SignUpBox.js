import React, { Component } from 'react';

class SignUpBox extends Component {

  handleSubmit(e){
    e.preventDefault()
    e.target.childNodes[0].value
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text"/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default SignUpBox;
