import axios from 'axios'

function fetchCurrentUser(userEmail, userPassword){

   return axios.get(`http://localhost:3000/api/v1/users/${userEmail}`, {
     params: {
       userEmail: userEmail,
       userPassword: userPassword
     }
   }).then( (response) => {
     return {
    type: 'FETCH_CURRENT_USER',
    payload: response
  }
})
}

export default fetchCurrentUser
