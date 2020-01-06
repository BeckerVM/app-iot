import React, { useEffect } from 'react'
import socket from '../socket'

const TestPage = function() {
  useEffect(() => {
    if(socket.GET_SOCKET()) {
      const mySocket = socket.GET_SOCKET()

      mySocket.on('welcome', (message) => {
        console.log(message)
      })
    }
  }, [])

  return (
    <div>
      TEST PAGE
    </div>
  )
}

export default TestPage
