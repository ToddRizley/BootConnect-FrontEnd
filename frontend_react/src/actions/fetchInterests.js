import axios from 'axios'
function fetchInterests(currentUserId){
  const USER_ID = currentUserId
  const url = 'http://localhost:3000/api/v1/interests/' + USER_ID
  const request = axios.get(url)
  console.log('request', request)
  return {
    type: 'FETCH_USER_INTERESTS',
    payload: request
  }
}

export default fetchInterests
