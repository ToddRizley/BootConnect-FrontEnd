import axios from 'axios'

function fetchCurrentUser(userEmail){
  var url = `http://localhost:3000/api/v1/users/${userEmail}`
   return axios.get(url).then( (response) => {
     sessionStorage.setItem("jwtToken", response.data.attributes.token)
     return {
    type: 'FETCH_CURRENT_USER',
    payload: response
  }
})
}
export default fetchCurrentUser
