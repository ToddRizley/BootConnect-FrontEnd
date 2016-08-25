/* Used for actions that require data from the User class */
export default function allUsersReducer(state = {userList: []}, action){

  switch(action.type){
    case 'FETCH_USERS':
      return { userList: action.payload.data };
    case 'FETCH_FILTERED_USERS':
      return { userList: action.payload.data};
    case 'FETCH_USERS_BY_DISTANCE':
      return { userList: action.payload.data};
    default:
      return state
  }
}
