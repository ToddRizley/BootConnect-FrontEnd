export default function myOrganizations(state = {organizations: []}, action) {
  switch(action.type){
    case 'FETCH_ORGANIZATIONS':
      return {organizations: action.payload.data}
    default:
      return state
  }
}
