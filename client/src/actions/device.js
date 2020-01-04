import request from '../api'

import { SET_DEVICES, SET_NEW_DEVICE } from '../definitions/device'

export const GET_DEVICES_BY_SUBCATEGORY = (subcategoryId) => async dispatch => {
  try {
    const response = await request.get(`device/subcategories/${subcategoryId}/devices`)
    dispatch({
      type: SET_DEVICES,
      payload: response.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const GET_DEVICE_BY_ID = (deviceId) => async dispatch => {
  try {
    const response = await request.get(`device/device/${deviceId}`)
    dispatch({
      type: SET_NEW_DEVICE,
      payload: response.data
    })
  } catch (error) {
    console.log(error)
  }
}



export const CLEAR_DEVICES = () => async dispatch => {
  dispatch({
    type: SET_DEVICES,
    payload: []
  })
}