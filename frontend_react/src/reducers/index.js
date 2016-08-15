import { combineReducers } from 'redux'
import myAdmins from './myAdmins'
import myArticles from './myArticles'
import myInterests from './myInterests'
import myJobs from './myJobs'
import myLocations from './myLocations'
import myOrganizations from './myOrganizations'
import myUsers from './myUsers'

export default combineReducers({
  myAdmins,
  myArticles,
  myInterests,
  myJobs,
  myLocations,
  myOrganizations,
  myUsers
})
