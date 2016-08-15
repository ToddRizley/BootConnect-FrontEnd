import axios from 'axios'

function fetchArticles(){

  const url = 'http://localhost:3000/api/v1/articles'
  const request = axios.get(url)
  console.log('request', request)

  return {
    type: 'FETCH_ARTICLES',
    payload: request
  }
}
export default fetchArticles
