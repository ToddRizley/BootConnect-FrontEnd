export default function locationReducer(state = {locationInfo: ""}, action) {
  switch(action.type){
    case 'FETCH_LAT_LONG':
      return {locationInfo: action.payload}
    case 'ADD_LOCATION':
      return {currentUser: action.payload.data}
    case 'FETCH_USER_LOCATION':
      return {currentUser: action.payload.data};
    default:
      return state
  }
}
