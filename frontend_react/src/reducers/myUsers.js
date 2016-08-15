
export default function myUsers(state = {users: []}, action){

  switch(action.type){
    case 'FETCH_USERS':
      return {users: action.payload.data };
    default:
      return state
  }
}
