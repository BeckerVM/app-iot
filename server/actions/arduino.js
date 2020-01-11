const uuid = require('uuid/v1')
const { Led, Servo } = require('johnny-five')

let devices = []

exports.addDevices = (socket, device) => {
  console.log('ADD_DEVICE')
  console.log(devices)

  device.id = uuid()
  device.value = 0
  devices.push(device)
  console.log(devices)
  socket.emit('get-devices', devices)
}

exports.runLed =(socket, myLed) => {
  console.log('RUN_LED')
  console.log(devices)

  const led = new Led(myLed.pin)

  devices = devices.map(device => {
    if(device.id !== myLed.id) {
      return device
    } else {
      myLed.value = !myLed.value
      return myLed
    }
  })

  if(myLed.value) {
    led.on()
  } else {
    led.off()
  }

  console.log(devices)

  socket.emit('get-devices', devices)
}

exports.runServo = (socket, data) => {//data = { myServo, value }
  const { myServo, value } = data
  console.log('RUN_SERVO')

  const servo = new Servo(myServo.pin)

  devices = devices.map(device => {
    if(device.id !== myServo.id) {
      return device
    } else {
      myServo.value = value
      return myServo
    }
  })

  servo.to(value)
  
  socket.emit('get-devices', devices)
}