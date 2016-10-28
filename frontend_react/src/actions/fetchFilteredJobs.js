import $ from 'jquery'

export default function fetchFilteredJobs(city) {

  const URL = 'http://localhost:3000/api/v1/jobs/' + city
  return $.ajax({
    url:URL,
    type:"GET",
    data: JSON.stringify({
      city: city
    }),
    contentType:"application/json; charset=utf-8",
    dataType:"json"
  }).then( (response) => {
    return {
      type: 'FETCH_FILTERED_JOBS',
      payload: response

    }
  })
}
