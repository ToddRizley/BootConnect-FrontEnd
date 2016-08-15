export default function myInterests(state = {interests: []}, action) {
  switch(action.type){
    case 'FETCH_INTERESTS':
      return {interests: action.payload.data}
    default:
      return state
  }
}
