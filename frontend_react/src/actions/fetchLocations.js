import axios from 'axios'

function fetchLocations(){
  const url = 'http://localhost:3000/api/v1/locations'
  debugger
  axios.get(url).then( (response) => {
    debugger
    return {
      type: 'FETCH_LOCATIONS',
      payload: response
    }
  })

}
export default fetchLocations
