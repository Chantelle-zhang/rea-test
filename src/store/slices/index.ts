import {combineReducers} from 'redux'
import propertyListReducer from './propertyList'


const rootReducer = combineReducers({
    propertyList: propertyListReducer,

})

export default rootReducer
