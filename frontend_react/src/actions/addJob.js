/* what is this doing? */
import $ from 'jquery'

export default function addJob(props) {
  debugger
  const URL = 'http://localhost:3000/api/v1/jobs'
  return $.ajax({
    url:URL,
    type:"POST",
    data: JSON.stringify({
      job: props
    }),
    contentType:"application/json; charset=utf-8",
    dataType:"json"
  }).then( (response) => {
    return {
      type: 'ADD_JOB',
      payload: response
    }
  })

}
