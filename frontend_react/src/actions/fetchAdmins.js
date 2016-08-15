import axios from 'axios'

function fetchAdmins(){

  const url = 'http://localhost:3000/api/v1/admins'
  const request = axios.get(url)
  console.log('request', request)

  return {
    type: 'FETCH_ADMINS',
    payload: request
  }
}

export default fetchAdmins
