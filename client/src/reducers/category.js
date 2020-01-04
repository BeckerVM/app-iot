import { SET_CATEGORIES } from '../definitions/category'

const initialState = {
  categories: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_CATEGORIES: 
      return {
        ...state,
        categories: action.payload
      }
    default:
      return state
  }
}