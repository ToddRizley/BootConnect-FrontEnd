import axios from 'axios'

function fetchLatLong(city, state){
  const API_KEY = "&key=AIzaSyByc29-KtwjrhnW6hwmyXeeWKyi2Asumyw"
  var city_info = city.split(" ").join("+")
  var state_info = state
  const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + city_info + "+" + state_info + API_KEY
  return axios.get(url).then( (response) => {
    return {
      type: 'FETCH_LAT_LONG',
      payload: response.data.results[0].geometry.location
    }
  })

}
export default fetchLatLong
