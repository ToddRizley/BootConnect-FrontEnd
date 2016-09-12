import $ from 'jquery'

export default function fetchJobsByDistance(city) {
  const dist = document.getElementById("filterTable-Distance-Jobs").value.split(" ")[0]
  const URL = `http://localhost:3000/api/v1/jobs/distance/${city}/${dist}`
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
      type: 'FETCH_JOBS_BY_DISTANCE',
      payload: response
    }
  })
}
