/* Used for actions that require data from the User class */
export default function myArticles(state = {articleList: []}, action) {
  switch(action.type){
    case 'FETCH_ARTICLES':
      return Object.assign({}, state, {articleList: action.payload.data})
    default:
      return state
  }
}
