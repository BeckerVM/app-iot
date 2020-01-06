import { SET_CONNECTED_ARDUINO, SET_SOCKET } from '../definitions/socket'




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