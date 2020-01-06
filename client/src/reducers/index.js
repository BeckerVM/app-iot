import { combineReducers } from 'redux'

//REDUCERS
import categoryReducer from './category'
import deviceReducer from './device'
import socketReducer from './socket'

export default combineReducers({
  category: categoryReducer, 
  device: deviceReducer,
  socket: socketReducer
})