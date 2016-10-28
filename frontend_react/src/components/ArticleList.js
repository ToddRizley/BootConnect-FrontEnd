import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListGroup } from 'react-bootstrap'
import { ListGroupItem } from 'react-bootstrap'

class Article extends Component {
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

const ArticleList = connect(mapStateToProps)(Article)

function mapStateToProps(state) {
  return {articleList: state.articleList}
}

export default ArticleList
