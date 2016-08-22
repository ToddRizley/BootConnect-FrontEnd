export default function locationReducer(state = {allLocations: []}, action) {

  switch(action.type){
    case 'FETCH_LOCATIONS':
      return {allLocations: action.payload}
    default:
      return state
  }
}
