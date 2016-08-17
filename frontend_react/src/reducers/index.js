import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'
import userReducer from './userReducer'


const reducers = {
  form: formReducer,
  currentUser: userReducer     // <---- Mounted at 'form'. See note below.
}


const rootReducer = combineReducers(reducers)

export default rootReducer
