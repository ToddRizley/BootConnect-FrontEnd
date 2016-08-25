import $ from 'jquery'

export default function addInterest(props, currentUser) {
  const URL = 'http://localhost:3000/api/v1/interests'
  const USER_ID = currentUser.currentUser.id
  return $.ajax({
    url:URL,
    type:"POST",
    data: JSON.stringify({
      interest: props,
      user_id: USER_ID
    }),
    contentType:"application/json; charset=utf-8",
    dataType:"json"
  }).then( (response) => {
    debugger
    return {
      type: 'ADD_INTEREST',
      payload: response
      //response is currentUser object with new interest
    }
  })
}
