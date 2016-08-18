import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'
import userReducer from './userReducer'
import interestReducer from './interestReducer'

const reducers = {
  form: formReducer,
  userInterests: interestReducer,
  currentUser: userReducer     // <---- Mounted at 'form'. See note below.
}

const rootReducer = combineReducers(reducers)

export default rootReducer
