import $ from 'jquery'

export default function addInterest(props, currentUserId) {
  debugger
  const URL = 'http://localhost:3000/api/v1/interests'
  const USER_ID = currentUserId
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
    return {
      type: 'ADD_INTEREST',
      payload: response
    }
  })
}
