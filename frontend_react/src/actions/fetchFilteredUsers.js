import $ from 'jquery'

export default function fetchFilteredUsers() {
  if (document.getElementById("filterTable-City").value) {
    var city = document.getElementById("filterTable-City").value
  } else {
    var city = ""
  }
  const URL = 'http://localhost:3000/api/v1/locations/' + city
  debugger
  return $.ajax({
    url:URL,
    type:"GET",
    data: JSON.stringify({
      city: city
    }),
    contentType:"application/json; charset=utf-8",
    dataType:"json"
  }).then( (response) => {
    debugger
    return {
      type: 'FETCH_FILTERED_USERS',
      payload: response

    }
  })
}
