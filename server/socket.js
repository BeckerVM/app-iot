let io

module.exports = {
  init: function(httpServer) {
    io = require('socket.io')(httpServer)
    return io
  },
  getIO: function() {
    if(!io) {
      throw new Error('Sockect.io not initialized!')
    }
    return io
  }
}