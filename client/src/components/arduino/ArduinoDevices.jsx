import React from 'react'

const ArduinoDevices = function() {
  return (
    <div className="arduino-devices">
      <div className="arduino-devices__device">
        <div className="arduino-devices__device-left">
          <img src="https://s3.amazonaws.com/mydevices-images/raspberryPi/sensors/200x200/Motor-Switch.png" alt="Motor"/>
          <div>
            <h4>Motor</h4>
            <p>On / Off Motor</p>
          </div>
        </div>
        <i class="fas fa-angle-right"></i>
      </div>
      <div className="arduino-devices__device">
        <div className="arduino-devices__device-left">
          <img src="https://s3.amazonaws.com/mydevices-images/raspberryPi/sensors/200x200/Servo-Motor.png" alt="Servo"/>
          <div>
            <h4>Servo Motor</h4>
            <p>Controlar un Servo Motor</p>
          </div>
        </div>
        <i class="fas fa-angle-right"></i>
      </div>
    </div>
  )
}

export default ArduinoDevices
