export default function jobReducer(state = {jobList: []}, action){
  switch(action.type){
    case 'FETCH_JOBS':
      return { jobList: action.payload.data };
    case 'FETCH_FILTERED_JOBS':
      return { jobList: action.payload.data};
    case 'REMOVE_JOB':
      return { jobList: action.payload.data};
    default:
        return state
    }
  }
