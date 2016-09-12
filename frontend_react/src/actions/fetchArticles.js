import axios from 'axios'

function fetchArticles(){

  const url = 'http://localhost:3000/api/v1/articles'
  return axios.get(url).then( (response)=> {
    return {
      type: 'FETCH_ARTICLES',
      payload: response.data
    }
  })
}
export default fetchArticles
