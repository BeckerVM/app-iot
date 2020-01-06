import mySocket from '../socket'
import { SET_CONNECTED_ARDUINO, SET_SOCKET } from '../definitions/socket'

const initialState = {
  socket: localStorage.getItem('socket'),
  connectedArduino: false 
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_SOCKET:
      let socket = mySocket.INIT()
      return {
        ...state,
        socket
      }
    case SET_CONNECTED_ARDUINO: 
      return {
        ...state,
        connectedArduino: action.payload
      }
    default:
      return state
  }
}