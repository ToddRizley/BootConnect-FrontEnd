export default function userReducer(state = {currentUser: ""}, action){
  switch(action.type){
    case 'ADD_USER':
      return { currentUser: action.payload.data};
    case 'FETCH_CURRENT_USER':
      return { currentUser: action.payload.data };
    case 'UPDATE_USER':
      return { currentUser: action.payload.data };
    case 'ADD_INTEREST':
      return {currentUser: action.payload.data};
    case 'FETCH_USER_INTERESTS':
      return {currentUser: action.payload.data};
    case 'REMOVE_INTEREST':
      return {currentUser: action.payload.data}
    default:
      return state
  }
}
