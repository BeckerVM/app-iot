import React from 'react'

//COMPONENTES
import ArduinoDevices from './ArduinoDevices'
import ArduinoFormDevice from './ArduinoFormDevice'

const ArduinoCategoryDevices = function() {
  return (
    <div className="arduino-category-devices">
      <div className="arduino-category-devices__left">
        <ArduinoDevices />
      </div>
      <div className="arduino-category-devices__right">
        <ArduinoFormDevice />
      </div>
    </div>
  )
}

export default ArduinoCategoryDevices
