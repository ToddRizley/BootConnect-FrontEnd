export default function myInterests(state = {interest: []}, action) {
  switch(action.type){
    case 'ADD_INTEREST':
      return {interest: action.payload.data}
    default:
      return state
  }
}
