export default function interestReducer(state = {interests: []}, action) {
  switch(action.type){
    case 'ADD_INTEREST':
      return {interests: action.payload.data};
    case 'FETCH_USER_INTERESTS':
      return {interests: action.payload.data};
    case 'REMOVE_INTEREST':
      return {interests: action.payload.data}
    default:
      return state
  }
}
