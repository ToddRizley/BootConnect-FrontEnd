import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import addArticle from '../actions/addArticle.js'

class ArticleForm extends Component {

  constructor(props) {
    super(props)
    this.state = {disabled: true}
  }

  /* Most article elements are displayed conditionally based on local state */
  toggleState(){
    this.setState({
      disabled: !this.state.disabled
    })
  }

  handleFormSubmit(props) {
    event.preventDefault()
    const {resetForm} = this.props

    this.props.addArticle(props).then( ()=>{
      var router = require('react-router')
      router.browserHistory.push('/dashboard')
      resetForm()
    })
  }

  render() {
    const disabled = this.state.disabled ? 'disabled' : ''
    const hidden = this.state.disabled ? 'hidden' : ''

    const {fields: {title, url}, handleSubmit} = this.props;

    return (
      <div className="article-form">

        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
              <button className="article-form-btn"
                      hidden={!hidden}
                      onDoubleClick={this.toggleState.bind(this)}
                      >
                      + Add Article
              </ button>
              <input className="article-form-input"
                     hidden={hidden}
                     type="textarea"
                     placeholder="Title"
                     {...title}
                     />

              <input className="article-form-input"
                     hidden={hidden}
                     type="textarea"
                     placeholder="Paste Link"
                     {...url}
                     />

              { this.state.disabled
                ? ''
                : <input className="article-form-input"
                         type="submit"
                         value="Save"
                        />
              }
        </form>
      </div>
    );
  }
}

export default reduxForm({
    form: 'articleForm',
    fields: ['title', 'url']
  },
  null,
  { addArticle })(ArticleForm);
