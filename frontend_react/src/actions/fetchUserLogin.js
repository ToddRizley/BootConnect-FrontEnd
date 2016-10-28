import axios from 'axios'

function fetchUserLogin(userEmail, userPassword){

   return axios.get(`http://localhost:3000/api/v1/users/${userEmail}`, {
     params: {
       userEmail: userEmail,
       userPassword: userPassword
     }
   }).then( (response) => {
     return {
    type: 'FETCH_USER_LOGIN',
    payload: response.data
  }
})
}

export default fetchUserLogin
