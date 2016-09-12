export default function myAdmins(state = {admins: []}, action){

  switch(action.type){
    case 'FETCH_ADMINS':
      return Object.assign({}, state, {admins: action.payload.data });
    default:
      return state
  }
}
