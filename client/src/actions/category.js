import request from '../api'

//DEFINICIONES
import { SET_CATEGORIES } from '../definitions/category'

export const GET_CATEGORIES = () => async dispatch => {
  try {
    const response = await request.get('device/categories')

    dispatch({ 
      type: SET_CATEGORIES, 
      payload: response.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const CLEAR_CATEGORIES = () => async dispatch => {
  dispatch({
    type: SET_CATEGORIES,
    payload: []
  })
}