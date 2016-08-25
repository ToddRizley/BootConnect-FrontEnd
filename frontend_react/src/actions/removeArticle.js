import axios from 'axios'

function removeArticle(){
  debugger
  let id = this.props.id
  const url = `http://localhost:3000/api/v1/articles/${id}`
  debugger
  const request = axios.post(url)

debugger
  return {
    type: 'REMOVE_ARTICLE',
    payload: request
  }
}
export default removeArticle
