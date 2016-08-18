export default function jobReducer(state = {currentUser: ""}, action) {
  switch(action.type){
    case 'ADD_JOB':
      return {currentUser: action.payload.data}
    case 'FETCH_USER_JOBS':
      return {currentUser: action.payload.data};
    default:
      return state
  }
}
