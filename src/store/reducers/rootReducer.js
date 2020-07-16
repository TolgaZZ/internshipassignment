import authReducer from './authReducer'
import taskReducer from './taskReducer'
import { combineReducers } from 'redux'
//Here will I combine my reducers

const rootReducer = combineReducers({
    auth: authReducer,
    task: taskReducer
})

export default rootReducer