import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ArticleForm from './ArticleForm'
import ArticleList from './ArticleList'
import removeArticle from '../actions/removeArticle'
import fetchArticles from '../actions/fetchArticles'
import addArticle from '../actions/addArticle'
import updateArticleList from '../actions/updateArticleList'

class DumbArticleContainer extends Component {
  componentWillMount() {
    this.props.fetchArticles()
  }

  handleFormSubmit(props) {
    event.preventDefault()
    const {resetForm} = this.props
    this.props.addArticle(props).then( ()=>{
      this.props.fetchArticles()
    }
  ).then( ()=>{
    var router = require('react-router')
    router.browserHistory.push('/dashboard')
    resetForm()
  })
  }

  render() {
    return(
      <div>
        <ArticleForm handleFormSubmit={this.handleFormSubmit}/>
        <ArticleList articleList={this.props.articleList} />
      </div>
    )
  }
}

const ArticleContainer = connect(mapStateToProps, mapDispatchToProps)(DumbArticleContainer)

function mapStateToProps(state) {
  return {articleList: state.articleList}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addArticle, removeArticle, fetchArticles, updateArticleList}, dispatch);
}

export default ArticleContainer
