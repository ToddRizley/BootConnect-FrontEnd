import axios from 'axios'
//verda@swaniawski.net
function fetchCurrentUser(userEmail){
  var url = `http://localhost:3000/api/v1/users/${userEmail}`
   return axios.get(url).then( (response) => {
     return {
    type: 'FETCH_CURRENT_USER',
    payload: response
  }
})
}

export default fetchCurrentUser
