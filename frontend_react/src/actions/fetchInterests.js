import axios from 'axios'
function fetchInterests(currentUser){
  const USER_ID = currentUser.currentUser.id
  const url = 'http://localhost:3000/api/v1/interests/' + USER_ID
  const request = axios.get(url)
  console.log('request', request)
  return {
    type: 'FETCH_USER_INTERESTS',
    payload: request
  }
}

export default fetchInterests
