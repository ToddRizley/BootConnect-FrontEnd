
export default function myGetCurrentUser(state = {current_user: ""}, action){
  switch(action.type){
    case 'FETCH_CURRENT_USER':
      return { current_user: action.payload.data };
    default:
      return state
  }
}
