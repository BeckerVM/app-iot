const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
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

  myBoard = new Board()

  myBoard.on('ready', function() {
    console.log('ready')
    socket.emit('arduino-connected', true)
  })

  myBoard.on('close', function() {
    console.log('close')
    socket.emit('arduino-connected', false)
  })

  socket.on('disconnect', function() {
    console.log('Disconnected platform')
  })
})
