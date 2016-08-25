export default function myArticles(state = {articleList: []}, action) {
  switch(action.type){
    case 'FETCH_ARTICLES':
      return {articleList: action.payload.data}
    default:
      return state
  }
}
