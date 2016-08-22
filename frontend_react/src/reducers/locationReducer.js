export default function locationReducer(state = {locationInfo: ""}, action) {
  switch(action.type){
    case 'FETCH_LAT_LONG':
      return {locationInfo: action.payload}
    default:
      return state
  }
}
