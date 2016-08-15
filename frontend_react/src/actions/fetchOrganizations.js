import axios from 'axios'

function fetchOrganizations(){

  const url = 'http://localhost:3000/api/v1/organizations'
  const request = axios.get(url)
  console.log('request', request)

  return {
    type: 'FETCH_ORGANIZATIONS',
    payload: request
  }
}
export default fetchOrganizations
