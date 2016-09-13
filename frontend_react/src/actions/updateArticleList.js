import axios from 'axios'

function updateArticleList(){

  const url = 'http://localhost:3000/api/v1/articles'
  return axios.get(url).then( (response)=> {
    return {
      type: 'UPDATE_ARTICLE_LIST',
      payload: response.data
    }
  })
}
export default updateArticleList
