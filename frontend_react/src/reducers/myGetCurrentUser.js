
export default function myGetCurrentUser(state = {current_user: ""}, action){
  switch(action.type){
    case 'FETCH_CURRENT_USER':
    console.log(action.payload.data.data.attributes)
      return { current_user: action.payload.data };
    default:
      return state
  }
}
