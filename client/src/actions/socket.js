import { SET_CONNECTED_ARDUINO, SET_SOCKET, SET_MY_DEVICES } from '../definitions/socket'




//CONNECTION SOCKECT
export const CONNECTING_SOCKET = (history) => dispatch => {
  dispatch({
    type: SET_SOCKET
  })

  history.push('/bybiot/dashboard')
}

//ARDUINO
export const IS_CONNECTED = (connected) => dispatch => {
  try {
    dispatch({
      type: SET_CONNECTED_ARDUINO,
      payload: connected
    })
  } catch (error) {
    console.log(error)
  }
}

export const GET_MY_DEVICES = (myDevices) => dispatch => {
  try {
    dispatch({
      type: SET_MY_DEVICES,
      payload: myDevices
    })
  } catch (error) {
    
  }
} 