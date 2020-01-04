import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const ArduinoListDevices = function ({ categories }) {
  console.log(categories)
  return (
    <div className="arduino-list-devices">
      <div className="arduino-list-devices__content">
        <div className="arduino-list-devices__list">
          <h4>Sensores</h4>
          <div className="arduino-list-devices__list-content">
            <div className="arduino-list-devices__item">
              <img src="https://s3.amazonaws.com/mydevices-images/raspberryPi/sensors/200x200/BMP180.png" alt="Sensor Temperatura" />
              <span>Temperatura</span>
            </div>
            <div className="arduino-list-devices__item">
              <img src="https://s3.amazonaws.com/mydevices-images/raspberryPi/sensors/200x200/Photocell-Resistor.png" alt="Sensor Luminosidad" />
              <span>Luminosidad</span>
            </div>
            <div className="arduino-list-devices__item">
              <img src="https://s3.amazonaws.com/mydevices-images/raspberryPi/sensors/200x200/Analog-Distance-Sensor.png" alt="Sensor Proximidad" />
              <span>Proximidad</span>
            </div>
          </div>
        </div>
        <div className="arduino-list-devices__list">
          <h4>Actuadores</h4>
          <div className="arduino-list-devices__list-content">
            <div className="arduino-list-devices__item">
              <img src="https://s3.amazonaws.com/mydevices-images/raspberryPi/sensors/200x200/Light-Switch.png" alt="Leds" />
              <span>Led</span>
            </div>
            <div className="arduino-list-devices__item">
              <img src="https://s3.amazonaws.com/mydevices-images/raspberryPi/sensors/200x200/Motor-Switch.png" alt="Motor" />
              <span>Motor</span>
            </div>
            <div className="arduino-list-devices__item">
              <img src="https://s3.amazonaws.com/mydevices-images/raspberryPi/sensors/200x200/Relay-Switch.png" alt="Relay" />
              <span>Relay</span>
            </div>
          </div>
        </div>
        <div className="arduino-list-devices__list">
        </div>

        <h4>Extensiones</h4>
        <div className="arduino-list-devices__list-content">
          <div className="arduino-list-devices__item">
            <img src="https://s3.amazonaws.com/mydevices-images/raspberryPi/sensors/200x200/ADS1015.png" alt="Convertidor" />
            <span>Convertidor Analogico</span>
          </div>
          <div className="arduino-list-devices__item">
            <img src="https://s3.amazonaws.com/mydevices-images/raspberryPi/sensors/200x200/DS2408.png" alt="GPIO" />
            <span>Puerto Gpio</span>
          </div>
        </div>
      </div>
    </div>
  )
}

ArduinoListDevices.propTypes = {
  categories: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  categories: state.category.categories
})

export default connect(mapStateToProps)(ArduinoListDevices)
