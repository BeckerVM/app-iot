const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const uuid = require('uuid/v1')
const { Board, Led } = require('johnny-five')

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
let devices = []

io.on('connection', (socket) => {
  console.log('Connected platform')

  socket.on('disconnect', function() {
    console.log('Disconnected platform')
  })

  socket.on('add-device', (device) => {
    device.id = uuid()
    device.value = 0
    devices.push(device)
    socket.emit('get-devices', devices)
  })

  //CONEXION ARDUINO
  myBoard = new Board()

  myBoard.on('ready', function() {
    console.log('ready')
    
    socket.emit('arduino-connected', true)

    //LED
    socket.on('led', myLed => {
      devices = devices.map(device => {
        if(device.id !== myLed.id) {
          return device
        } else {
          return myLed
        }
      })

      const led = new Led(myLed.pin)

      if(myLed.value) {
        led.on()
      } else {
        led.off()
      }

      socket.emit('get-devices', devices)
    })
  })

  myBoard.on('close', function() {
    console.log('close')
    socket.emit('arduino-connected', false)
  })

})
