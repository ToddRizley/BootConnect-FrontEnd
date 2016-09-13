import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ArticleForm from './ArticleForm'
import ArticleList from './ArticleList'
import removeArticle from '../actions/removeArticle'
import fetchArticles from '../actions/fetchArticles'
import updateArticleList from '../actions/updateArticleList'

class DumbArticleContainer extends Component {
  componentWillMount() {
    this.props.fetchArticles()
  }

  shouldComponentUpdate(newProps){
    return newProps.articleList.articleList.count !== this.props.articleList.articleList.count
  }

  componentWillUpdate(){
      this.props.updateArticleList()
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
  return bindActionCreators({removeArticle, fetchArticles, updateArticleList}, dispatch);
}

export default ArticleContainer
