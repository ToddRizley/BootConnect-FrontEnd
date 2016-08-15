import axios from 'axios'

function fetchInterests(){

  const url = 'http://localhost:3000/api/v1/interests'
  const request = axios.get(url)
  console.log('request', request)

  return {
    type: 'FETCH_INTERESTS',
    payload: request
  }
}
export default fetchInterests
