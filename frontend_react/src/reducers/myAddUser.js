export default function myAddUser(state = {currentUser: ""}, action){
  switch(action.type){
    case 'ADD_USER':
      return { currentUser: action.payload.data.attributes };
    case 'UPDATE_USER':
      return { currentUser: action.payload.data.attributes };
    default:
      return state
  }
}
