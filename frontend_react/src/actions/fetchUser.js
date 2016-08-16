import axios from 'axios'

function fetchUser(email_address){

  const url = 'http://localhost:3000/api/v1/users'
  const request = axios.get(url)
  console.log('request', request)

  return {
    type: 'FETCH_USERS',
    payload: request
  }
}
export default fetchUsers
