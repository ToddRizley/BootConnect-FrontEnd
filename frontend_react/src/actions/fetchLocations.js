import axios from 'axios'

function fetchLocations(){

  const url = 'http://localhost:3000/api/v1/locations'
  const request = axios.get(url)
  console.log('request', request)

  return {
    type: 'FETCH_LOCATIONS',
    payload: request
  }
}
export default fetchLocations
