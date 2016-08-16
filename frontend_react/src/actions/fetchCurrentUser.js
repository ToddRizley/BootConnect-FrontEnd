import axios from 'axios'
//verda@swaniawski.net
function fetchCurrentUser(userEmail){
debugger
  var url = `http://localhost:3000/api/v1/users/${userEmail}`
   return axios.get(url).then( (response) => {
     debugger
     return {
    type: 'FETCH_CURRENT_USER',
    payload: response
  }
})
}

export default fetchCurrentUser
