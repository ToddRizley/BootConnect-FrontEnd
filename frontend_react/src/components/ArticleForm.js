import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import addArticle from '../actions/addArticle.js'

class ArticleForm extends Component {

  constructor(props) {
    super(props)
    this.state = {enabled: false}
  }
  /* Most article elements are displayed conditionally based on local state */
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

    const titleInput = this.state.enabled ? <input type="textarea" placeholder="Add Title" {...title} /> : <input disabled="disabled" type="textarea" placeholder="Add Title" {...title} />
    const urlInput = this.state.enabled ? <input type="textarea" placeholder="Add Link" {...url} /> : <input disabled="disabled" type="textarea" placeholder="Add Link" {...url} />
    const submitButton = this.state.enabled ? <input type="submit" value="Save" /> : <div/>
    /* Once a user clicks the Article element, the optional elements are displayed*/
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
  },
  null,
  { addArticle })(ArticleForm);
