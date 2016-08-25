import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import removeArticle from '../actions/removeArticle.js'
import fetchArticles from '../actions/fetchArticles'

class Article extends Component {
  /* Updates store.articlesList with all articles currently in database.
  / Store.articlesList is is then mapped to props */
  componentWillMount() {
    this.props.fetchArticles.fetchArticles()
    }

  render(){
    return(
  <div>
    <div data-role="header">
      <h1>Articles...</h1>
    </div>

    <div>
      <table data-role="table" data-mode="columntoggle" class="ui-responsive ui-shadow" id="myTable" >
        <thead>
          <tr>
            <th data-priority="1">Title</th>
            <th data-priority="2">URL</th>
          </tr>
        </thead>
        <tbody>
          {this.props.articleList.articleList.map( (article)=> {
                  return( <tr>
                      <td>{article.attributes.title}</td>
                      <td>{article.attributes.url}</td>
                    </tr>)
                  }
                  )}

        </tbody>
      </table>
    </div>
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
