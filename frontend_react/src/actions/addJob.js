import $ from 'jquery'

export default function addJob(props, currentUser) {

  const URL = 'http://localhost:3000/api/v1/jobs'
  const USER_ID = currentUser.currentUser.id
  return $.ajax({
    url:URL,
    type:"POST",
    data: JSON.stringify({
      job: props,
      user_id: USER_ID
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
