export default function myJobs(state = {jobs: []}, action) {
  switch(action.type){
    case 'FETCH_JOBS':
      return {jobs: action.payload.data}
    default:
      return state
  }
}
