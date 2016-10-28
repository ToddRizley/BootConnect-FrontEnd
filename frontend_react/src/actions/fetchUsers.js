import axios from 'axios'

function fetchUsers(){
  const url = 'http://localhost:3000/api/v1/users'
  return axios.get(url).then( (response)=> {
  return {
    type: 'FETCH_USERS',
    payload: response.data
  }
  })
}
export default fetchUsers
