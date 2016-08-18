export default function myInterests(state = {interest: []}, action) {
  debugger
  switch(action.type){
    case 'ADD_INTEREST':
      return {interest: action.payload.data}
    default:
      return state
  }
}
