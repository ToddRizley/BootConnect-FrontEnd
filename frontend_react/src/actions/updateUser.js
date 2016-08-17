import $ from 'jquery'

export default function updateUser(props, current_user) {
  debugger
  const URL = `http://localhost:3000/api/v1/user/${current_user.id}`
  debugger
  return $.ajax({
    url:URL,
    type:"PATCH",
    data: JSON.stringify({
      name: props.name,
      bio: props.bio,
      company: props.company,
      email_address: props.email_address,
      position: props.position,
      interests: props.interests
     }),
    contentType:"application/json; charset=utf-8",
    dataType:"json"
  }).then( (response) => {
    console.log(response)
    return {
      type: 'UPDATE_USER',
      payload: response
    }
  })

}
