import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import removeArticle from '../actions/removeArticle.js'

class Article extends Component {
  render(){
    var articles = this.props.currentUser.currentUser.attributes.articles
    return(
      <div>
        Article List...
        <ul>
          { articles.map( (article) => {
            return <li>{article.title}<button>X</button></li>
          })}
        </ul>
      </div>
    )
  }
}

const ArticleList = connect(mapStateToProps)(Article)

function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

function mapDispatchToProps(dispatch) {
  return  {removeArticle: bindActionCreators({removeArticle}, dispatch)}
}

export default ArticleList
