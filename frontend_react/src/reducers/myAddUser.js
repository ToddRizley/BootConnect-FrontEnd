export default function myAddUser(state = {current_user: " "}, action){
  switch(action.type){
    case 'ADD_USER':
      console.log(action.payload.data.attributes)
      return { current_user: action.payload.data };

    default:
      return state
  }
}
