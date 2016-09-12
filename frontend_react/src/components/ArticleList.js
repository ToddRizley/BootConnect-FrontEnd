import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import removeArticle from '../actions/removeArticle.js'
import fetchArticles from '../actions/fetchArticles'
import { ListGroup } from 'react-bootstrap'
import { ListGroupItem } from 'react-bootstrap'

//passing down articleList as props, creating state, iterating over state to produce items

class Article extends Component {
  constructor(props){
    super(props)
    this.state = {articles: this.props.articleList.articleList}
  }

  componentWillMount() {
    this.props.fetchArticles.fetchArticles()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }

  componentWillReceiveProps(nextProps){
    //old props accessed through this.props
    //not called on initial render
    //set state to NEW props (new article list)

    //want to change the state here to trigger a re-render
    debugger
    this.setState({articles: nextProps.articleList.articleList})
  }

  componentWillUpdate(nextProps, nextState){
    //
  }

  render(){
      return(
      <div>
        <ListGroup>
          {this.state.articles.map( (article) => {

            return(
              <ListGroupItem href="#" header={article.attributes.title}>
                {article.attributes.url}
              </ListGroupItem>
            )}
          )}
        </ListGroup>
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
