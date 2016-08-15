import { combineReducers } from 'redux'
import myAdmins from './myAdmins'
import myArticles from './myArticles'
import myInterests from './myInterests'
import myJobs from './myJobs'
import myLocations from './myLocations'
import myOrganizations from './myOrganizations'
import myUsers from './myUsers'
import {reducer as formReducer} from 'redux-form'

const reducers = { 
	myAdmins,
  myArticles,
  myInterests,
  myJobs,
  myLocations,
  myOrganizations,
  myUsers,
  form: formReducer     // <---- Mounted at 'form'. See note below.
}


const rootReducer = combineReducers(reducers)

export default rootReducer


