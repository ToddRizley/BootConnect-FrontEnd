import axios from 'axios'

function fetchCurrentUser(userEmail){
  debugger
  const url = `http://localhost:3000/api/v1/users/${userEmail}`
  const request = axios.get(url)
  console.log('request', request)

  return {
    type: 'FETCH_CURRENT_USER',
    payload: request
  }
}
export default fetchCurrentUser
