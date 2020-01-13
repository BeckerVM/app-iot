const uuid = require('uuid/v1')
const { Led, Servo, Thermometer, Proximity } = require('johnny-five')

let devices = []
let temperatures = []

exports.addDevices = (socket, device) => {
  console.log('ADD_DEVICE')
  console.log(devices)

  device.id = uuid()
  device.value = 0

  if(device.type === 'LM35' || device.type === 'Sensor HC-SR04') {
    device.value = []
  }

  
  devices.push(device)
  console.log(devices)
  socket.emit('get-devices', devices)
}

exports.deleteDevice = (socket, device) => {
  console.log('DELETE_DEVICE')
  
  const updatedDevices = devices.filter(d => d.id !== device.id)
  devices = updatedDevices

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

exports.runLm = (socket, myLm) => {
  console.log('RUN_LM')

  const thermometer = new Thermometer({
    controller: "LM35",
    pin: myLm.pin,
    freq: 3000
  })

  thermometer.on('data', function() {
    temperatures.push(this.C)
    console.log(this.C)
    socket.emit('send-data-lm', { data: temperatures, c: this.C })
  })
}

exports.runProximity = (socket, myProximity) => {
  console.log('RUN_PROXIMITY')

  const proximity = new Proximity({
    controller: "HCSR04",
    pin: myProximity.pin,
    freq: 2000
  })

  proximity.on('change', () => {
    const { centimeters } = proximity

    console.log("cm: ", centimeters)

    socket.emit('send-data-proximity', [centimeters])
  })
}