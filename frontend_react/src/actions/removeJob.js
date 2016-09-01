import axios from 'axios'

function removeJob(){
  let id = this.props.id
  const url = `http://localhost:3000/api/v1/jobs/${id}`
  const request = axios.post(url)

  return {
    type: 'REMOVE_JOB',
    payload: request
  }
}
export default removeJob
