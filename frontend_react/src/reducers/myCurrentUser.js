export default function setCurrentUser(state = {current_user: []}, action){

  switch(action.type){
    case 'SET_CURRENT_USER':
      return {current_user: action.payload.data };
    default:
      return state
  }
}
