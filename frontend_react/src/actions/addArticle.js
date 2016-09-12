import $ from 'jquery'

export default function addArticle(props, currentUserId) {

  const URL = 'http://localhost:3000/api/v1/articles'
  return $.ajax({
    url:URL,
    type:"POST",
    data: JSON.stringify({
      article: props,
      user_id: currentUserId
    }),
    contentType:"application/json; charset=utf-8",
    dataType:"json"
  }).then( (response) => {
    return {
      type: 'ADD_ARTICLE',
      payload: response
    }
  })
}
