import { combineReducers } from 'redux'

//REDUCERS
import categoryReducer from './category'

export default combineReducers({
  category: categoryReducer
})