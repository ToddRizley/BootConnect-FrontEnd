/* Used for actions that require data from the User class */
export default function articleReducer(state = {articleList: []}, action) {
  switch(action.type){
    case 'FETCH_ARTICLES':
      return Object.assign({}, state, {articleList: action.payload.data});
    case 'UPDATE_ARTICLE_LIST':
      return Object.assign({}, state, {articleList: action.payload.data});
    default:
      return state
  }
}
