import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import addArticle from '../actions/addArticle.js'
import fetchArticles from '../actions/fetchArticles'

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


  render() {
    const disabled = this.state.disabled ? 'disabled' : ''
    const hidden = this.state.disabled ? 'hidden' : ''

    const {fields: {title, url}, handleSubmit} = this.props;

    return (
      <div className="article-form">

        <form onSubmit={handleSubmit(this.props.handleFormSubmit.bind(this))}>
              <button className="article-form-btn"
                      hidden={!hidden}
                      onClick={this.toggleState.bind(this)}
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
  { addArticle, fetchArticles })(ArticleForm);
