import $ from 'jquery'

export default function fetchUsersByDistance(currentUser) {
  const city = currentUser.attributes.location.city
  const dist = document.getElementById("filterTable-Distance").value.split(" ")[0]
  const URL = `http://localhost:3000/api/v1/users/distance/${city}/${dist}`
  return $.ajax({
    url:URL,
    type:"GET",
    data: JSON.stringify({
      distance: dist,
      loc: city
    }),
    contentType:"application/json; charset=utf-8",
    dataType:"json"
  }).then( (response) => {
    return {
      type: 'FETCH_USERS_BY_DISTANCE',
      payload: response

    }
  })
}
