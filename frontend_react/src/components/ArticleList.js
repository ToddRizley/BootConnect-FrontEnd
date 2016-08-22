import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Article extends Component {
  render(){
    var articles = this.props.currentUser.currentUser.attributes.articles
    return(
      <div>
        Article List...
        <ul>
          { articles.map( (article) => {
            return <li>{article.title}</li>
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

export default ArticleList
