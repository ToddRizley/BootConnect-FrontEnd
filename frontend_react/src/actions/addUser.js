import $ from 'jquery'

export default function addUser(props) {
  const URL = 'http://localhost:3000/api/v1/users'
  return $.ajax({
    url:URL,
    type:"POST",
    data: JSON.stringify({user: props}),
    contentType:"application/json; charset=utf-8",
    dataType:"json"
  }).then( (response) => {
    return {
      type: 'ADD_USER',
      payload: response
    }
  })

}
