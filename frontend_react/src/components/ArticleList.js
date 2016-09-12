import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import removeArticle from '../actions/removeArticle.js'
import fetchArticles from '../actions/fetchArticles'
import { ListGroup } from 'react-bootstrap'
import { ListGroupItem } from 'react-bootstrap'

class Article extends Component {

  componentWillMount() {
    this.props.fetchArticles.fetchArticles()
  }

  render(){
    var articleList = this.props.articleList.articleList

    return(
      <div>
        <ListGroup>

          { articleList.slice(articleList.length - 10, articleList.length)
            .map( (article) => {
              return(
                <ListGroupItem href="#" header={article.attributes.title}>
                  {article.attributes.url}
                </ListGroupItem>
              )}
          )}

        </ListGroup>
        <div> View All Articles </div>
      </div>

    )
  }
}

const ArticleList = connect(mapStateToProps, mapDispatchToProps)(Article)

function mapStateToProps(state) {
  return {articleList: state.articleList}
}

function mapDispatchToProps(dispatch) {
  return  {removeArticle: bindActionCreators({removeArticle}, dispatch),
  fetchArticles: bindActionCreators({fetchArticles}, dispatch)
    }
}

export default ArticleList
