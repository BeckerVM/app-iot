import { combineReducers } from 'redux'

//REDUCERS
import categoryReducer from './category'
import deviceReducer from './device'

export default combineReducers({
  category: categoryReducer, 
  device: deviceReducer
})