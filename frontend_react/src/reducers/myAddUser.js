export default function myAddUser(state = {current_user: " "}, action){
  switch(action.type){
    case 'ADD_USER':
      return { users: action.payload.data };
    default:
      return state
  }
}
