export default function myAddUser(state = {current_user: " "}, action){
  switch(action.type){
    case 'UPDATE_USER':
      return { current_user: action.payload.data };

    default:
      return state
  }
}
