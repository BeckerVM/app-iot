import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

//ACCIONES
import { GET_DEVICE_BY_ID } from '../../actions/device'

//COMPONENTE
const ArduinoDevices = function({ devices, GET_DEVICE_BY_ID}) {
  return (
    <div className="arduino-devices">
      {
        devices.map(device =>
          <div 
            className="arduino-devices__device" 
            key={device.id}
            onClick={() => GET_DEVICE_BY_ID(device.id)}
          >
            <div className="arduino-devices__device-left">
              <img src={device.imageUrl} alt="Dispositivo"/>
              <div>
              <h4>{ device.name }</h4>
                <p>{ device.description }</p>
              </div>
            </div>
            <i className="fas fa-angle-right"></i>
          </div>
        )
      }
    </div>
  )
}

ArduinoDevices.propTypes = {
  devices: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  devices: state.device.devices
})

export default connect(mapStateToProps, {
  GET_DEVICE_BY_ID
})(ArduinoDevices)
