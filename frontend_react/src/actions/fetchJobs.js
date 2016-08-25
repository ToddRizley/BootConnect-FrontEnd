import axios from 'axios'

function fetchJobs(){
  const url = 'http://localhost:3000/api/v1/jobs'
  return axios.get(url).then( (response)=> {
  return {
    type: 'FETCH_JOBS',
    payload: response.data
      }
    })
  }
  export default fetchJobs
