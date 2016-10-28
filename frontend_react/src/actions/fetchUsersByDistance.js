import $ from 'jquery'

export default function fetchUsersByDistance(dist, city) {
  const URL = `http://localhost:3000/api/v1/users/distance/${city}/${dist}`
  debugger
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
    debugger
    return {
      type: 'FETCH_USERS_BY_DISTANCE',
      payload: response

    }
  })
}
