
function setCurrentUser(userObject){
  return {
    type: 'SET_CURRENT_USER',
    payload: {current_user: userObject}
  }
}
