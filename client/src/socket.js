import io from 'socket.io-client'

let socket 

export default {
  INIT: function() {
    socket = io('localhost:5000')

    return socket
  }
}