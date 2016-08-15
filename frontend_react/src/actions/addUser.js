import axios from 'axios'

function addUser(newUser){

  const url = 'http://localhost:3000/api/v1/users'
  const request = axios.post(url)
  console.log('request', request)

  return {
    type: 'ADD_USER',
    payload: request
  }
}
export default addUsers
