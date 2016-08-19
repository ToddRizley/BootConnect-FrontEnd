import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import addArticle from '../actions/addArticle.js'

class ArticleForm extends Component {

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
    event.preventDefault()

    this.setState({
      enabled: !this.state.enabled
    })

    this.props.addArticle(props, this.props.currentUser).then( ()=>{
      var router = require('react-router')
      router.browserHistory.push('/profile')
    })
  }

  render() {
    const {fields: {title, url}, handleSubmit} = this.props;
    var titleInput = this.state.enabled ? <input type="textarea" placeholder="Add Title" {...title} /> : <input disabled="disabled" type="textarea" placeholder="Add Title" {...title} />
    var urlInput = this.state.enabled ? <input type="textarea" placeholder="Add Link" {...url} /> : <input disabled="disabled" type="textarea" placeholder="Add Link" {...url} />
    //var descriptionInput = this.state.enabled ? <input type="textarea" placeholder="Add Description" {...description} /> : <input disabled="disabled" type="textarea" placeholder="Add Description" {...description} />
    var submitButton = this.state.enabled ? <input type="submit" value="Save" /> : <div/>

    return (
      <div className="header">
      {this.state.enabled ? null : <button onClick={this.toggleState.bind(this)}>Add Article</button>}
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          {titleInput}
          {urlInput}
          {submitButton}
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { currentUser: state.currentUser }
  }

export default reduxForm({
  form: 'articleForm',
  fields: ['title', 'url']
}, null, { addArticle })(ArticleForm);
