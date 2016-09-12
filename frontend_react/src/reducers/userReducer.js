/* Used for actions that concern the current user */
export default function userReducer(state = {currentUser: ""}, action){

  switch(action.type){
    case 'ADD_USER':
      return Object.assign({}, state,  { currentUser: action.payload.data});
    case 'FETCH_CURRENT_USER':
      return Object.assign({}, state,  { currentUser: action.payload.data });
    case 'UPDATE_USER':
      return Object.assign({}, state,  { currentUser: action.payload.data });
    case 'ADD_INTEREST':
      return Object.assign({}, state,  {currentUser: action.payload.data});
    case 'FETCH_USER_INTERESTS':
      return Object.assign({}, state,  {currentUser: action.payload.data});
    case 'REMOVE_INTEREST':
      return Object.assign({}, state,  {currentUser: action.payload.data});
    case 'ADD_JOB':
      return Object.assign({}, state,  {currentUser: action.payload.data});
    case 'FETCH_USER_JOBS':
      return Object.assign({}, state,  {currentUser: action.payload.data});
    case 'REMOVE_ARTICLE':
      return Object.assign({}, state,  {currentUser: action.payload.data});
    case 'REMOVE_JOB':
        return Object.assign({}, state,  { currentUser: action.payload.data});
    default:
      return state
  }
}
