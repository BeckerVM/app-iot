import React from 'react'
import { connect } from 'react-redux'

//COMPONENTES
import ArduinoDevices from './ArduinoDevices'
import ArduinoFormDevice from './ArduinoFormDevice'

//COMPONENTE
const ArduinoCategoryDevices = function({ newDevice }) {
  return (
    <div className="arduino-category-devices">
      <div className="arduino-category-devices__left">
        <ArduinoDevices />
      </div>
      <div className="arduino-category-devices__right">
        {
          newDevice !== null && <ArduinoFormDevice />
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  newDevice: state.device.newDevice
})

export default connect(mapStateToProps)(ArduinoCategoryDevices)
