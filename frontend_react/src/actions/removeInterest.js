import $ from 'jquery'

export default function removeInteret(userId, interestId) {

  const URL = `http://localhost:3000/api/v1/interests/${interestId}`
  return $.ajax({
    url:URL,
    type:"PATCH",
    data: JSON.stringify({
      userId: userId,
      interestId: interestId
    }),
    contentType:"application/json; charset=utf-8",
    dataType:"json"
  }).then( (response) => {
    return {
      type: 'REMOVE_INTEREST',
      payload: response
    }
  })
}
