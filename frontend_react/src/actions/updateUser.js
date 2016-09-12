import $ from 'jquery'

export default function updateUser(props, currentUserId) {
  const URL = 'http://localhost:3000/api/v1/users/' + currentUserId
  debugger
  return $.ajax({
    url:URL,
    type:"PATCH",
    data: JSON.stringify({
      name: props.name,
      location: props.location,
      bio: props.bio,
      company: props.company,
      email_address: props.email_address,
      position: props.position,
      interests: props.interests,
      experience: props.experience
      token: sessionStorage.jwtToken
     }),
    contentType:"application/json; charset=utf-8",
    dataType:"json"
  }).then( (response) => {
    sessionStorage.setItem("jwtToken", response.data.attributes.token)
    return {
      type: 'UPDATE_USER',
      payload: response
    }
  })

}
