import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'
import userReducer from './userReducer'
import interestReducer from './interestReducer'
import locationReducer from './locationReducer'
import allUsersReducer from './allUsersReducer'

const reducers = {
  form: formReducer,
  currentUser: userReducer,
  locationInfo: locationReducer,
  userList: allUsersReducer
      // <---- Mounted at 'form'. See note below.
}

const rootReducer = combineReducers(reducers)

export default rootReducer
