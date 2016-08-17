import $ from 'jquery'

export default function addInterest(props) {
  const URL = 'http://localhost:3000/api/v1/interests'

  return $.ajax({
    url:URL,
    type:"POST",
    data: JSON.stringify({interest: props}),
    contentType:"application/json; charset=utf-8",
    dataType:"json"
  }).then( (response) => {
    debugger
    return {
      type: 'ADD_INTEREST',
      payload: response
    }
  })

}
