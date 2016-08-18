export default function locationReducer(state = {currentUser: ""}, action) {
  switch(action.type){
    case 'ADD_LOCATION':
      return {currentUser: action.payload.data}
    case 'FETCH_USER_LOCATION':
      return {currentUser: action.payload.data};
    default:
      return state
  }
}
