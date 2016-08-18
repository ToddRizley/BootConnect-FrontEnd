export default function interestReducer(state = {currentUser: []}, action) {
  switch(action.type){
    // moved to userReducer to incorporate the return of a new currentUser when adding a new interest

    // case 'ADD_INTEREST':
    //   return {currentUser: action.payload.data};
    // case 'FETCH_USER_INTERESTS':
    //   return {currentUser: action.payload.data};
    // case 'REMOVE_INTEREST':
    //   return {currentUser: action.payload.data}
    default:
      return state
  }
}
