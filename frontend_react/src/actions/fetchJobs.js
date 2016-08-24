import axios from 'axios'

function fetchJobs(){
  debugger
  const url = 'http://localhost:3000/api/v1/jobs'
  return axios.get(url).then( (response)=> {
    debugger
  return {
    type: 'FETCH_JOBS',
    payload: response.data
      }
    })
  }
  export default fetchJobs
