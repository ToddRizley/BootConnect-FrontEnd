import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ArticleForm from './ArticleForm'
import ArticleList from './ArticleList'
import removeArticle from '../actions/removeArticle'
import fetchArticles from '../actions/fetchArticles'

class DumbArticleContainer extends Component {
  componentWillMount() {
    this.props.fetchArticles.fetchArticles()
  }

  render() {
    return(
      <div>
        <ArticleForm />
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
  return  {removeArticle: bindActionCreators({removeArticle}, dispatch),
  fetchArticles: bindActionCreators({fetchArticles}, dispatch)
    }
}

export default ArticleContainer
