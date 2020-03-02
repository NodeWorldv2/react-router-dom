import { combineReducers } from 'redux'
import authReducer from './authReducer'
import datareducer from './datareducer'

const rootReducer = combineReducers({
    auth_rr: authReducer,
    data_rr: datareducer,

})

export default rootReducer;