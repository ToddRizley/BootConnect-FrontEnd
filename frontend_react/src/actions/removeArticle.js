import axios from 'axios'

function removeArticle(){
  let id = this.props.id
  const url = `http://localhost:3000/api/v1/articles/${id}`
  const request = axios.post(url)

  return {
    type: 'REMOVE_ARTICLE',
    payload: request
  }
}
export default removeArticle
