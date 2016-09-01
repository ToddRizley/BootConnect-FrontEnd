import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'
import userReducer from './userReducer'
import locationReducer from './locationReducer'
import allUsersReducer from './allUsersReducer'
import articleReducer from './articleReducer'
import jobReducer from './jobReducer'

const reducers = {
  form: formReducer,
  currentUser: userReducer,
  locationInfo: locationReducer,
  jobList: jobReducer,
  userList: allUsersReducer,
  articleList: articleReducer
}

const rootReducer = combineReducers(reducers)

export default rootReducer
