import $ from 'jquery'

export default function addArticle(props, currentUser) {
  debugger
  const URL = 'http://localhost:3000/api/v1/articles'
  const USER_ID = currentUser.currentUser.id
  return $.ajax({
    url:URL,
    type:"POST",
    data: JSON.stringify({
      article: props,
      user_id: USER_ID
    }),
    contentType:"application/json; charset=utf-8",
    dataType:"json"
  }).then( (response) => {
    debugger
    return {
      type: 'ADD_ARTICLE',
      payload: response
      //response is currentUser object with new article
    }
  })
}
