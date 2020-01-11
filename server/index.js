const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { Board } = require('johnny-five')

const app = express()

//MIDDLEWARES
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

//RUTAS
app.use('/api/device', require('./routes/device'))

const PORT = 5000

const server = app.listen(PORT, () => {
  console.log('Server starting in port ' + PORT)
})

const io = require('./socket').init(server)

//ARDUINO VARIABLES
let myBoard = null

//ACCIONES
const { addDevices, runLed, runServo } = require('./actions/arduino')

io.on('connection', (socket) => {
  console.log('Connected platform')

  socket.on('disconnect', function() {
    console.log('Disconnected platform')
  })

  //AÑADIR MAS COMPONENTES A NUESTRO ARDUINO
  socket.on('add-device', (device) => addDevices(socket, device))

  //CONEXION ARDUINO
  myBoard = new Board()

  //CUANDO EL ARDUINO ESTA LISTO PARA FUNCIONAR
  myBoard.on('ready', function() {
    console.log('ready')
    
    socket.emit('arduino-connected', true)

    //LED
    socket.on('led', myLed => runLed(socket, myLed))
    //SERVO
    socket.on('servo', data => runServo(socket, data))
  })

  //CUANDO EL ARDUINO ES DESCONECTADO
  myBoard.on('close', function() {
    console.log('close')
    socket.emit('arduino-connected', false)
  })

})
