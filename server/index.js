const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

//MIDDLEWARES
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

//RUTAS
app.use('/api/device', require('./routes/device'))

const PORT = 5000

app.listen(PORT, () => {
  console.log('Server starting in port ' + PORT)
})