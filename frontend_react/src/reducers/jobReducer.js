export default function jobReducer(state = {jobList: []}, action){
  switch(action.type){
    case 'ADD_JOB':
      return Object.assign({}, state,  {jobList: action.payload.data});
    case 'FETCH_JOBS':
      return Object.assign({}, state, { jobList: action.payload.data });
    case 'FETCH_FILTERED_JOBS':
      return Object.assign({}, state, { jobList: action.payload.data });
    case 'FETCH_JOBS_BY_DISTANCE':
      return Object.assign({}, state, { jobList: action.payload.data });
    default:
        return state
    }
  }
