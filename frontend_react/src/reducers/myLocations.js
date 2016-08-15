export default function myLocations(state = {locations: []}, action) {
  switch(action.type){
    case 'FETCH_LOCATIONS':
      return {locations: action.payload.data}
    default:
      return state
  }
}
