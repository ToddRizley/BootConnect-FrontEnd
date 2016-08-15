import axios from 'axios'

function fetchJobs(){

  const url = 'http://localhost:3000/api/v1/jobs'
  const request = axios.get(url)
  console.log('request', request)

  return {
    type: 'FETCH_JOBS',
    payload: request
  }
}
export default fetchJobs
