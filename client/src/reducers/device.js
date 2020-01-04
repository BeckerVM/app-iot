import { SET_DEVICES, SET_NEW_DEVICE } from '../definitions/device'

const initialState = {
  devices: [],
  newDevice: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_DEVICES:
      return {
        ...state,
        devices: action.payload
      }
    case SET_NEW_DEVICE:
      return {
        ...state,
        newDevice: action.payload
      }
    default:
      return state
  }
}