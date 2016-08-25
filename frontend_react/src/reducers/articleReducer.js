export default function myArticles(state = {articles: []}, action) {
  switch(action.type){
    case 'FETCH_ARTICLES':
      return {articles: action.payload.data}
    default:
      return state
  }
}
