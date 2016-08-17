
export default function myGetCurrentUser(state = {currentUser: ""}, action){
  switch(action.type){
    case 'FETCH_CURRENT_USER':
      return { currentUser: action.payload.data };
    default:
      return state
  }
}
