import React from 'react'

//COMPONENTES
import NavigationAdd from '../components/navigation/NavigationAdd'
import ArduinoListDevices from '../components/arduino/ArduinoListDevices'
import ArduinoCategoryDevices from '../components/arduino/ArduinoCategoryDevices'

const AddPage = function() {
  return (
    <div className="add">
      <div className="add__left">
        <NavigationAdd />
      </div>
      <div className="add__rigth">
        { false && <ArduinoListDevices /> }
        { true && <ArduinoCategoryDevices /> }
      </div>
    </div>
  )
}

export default AddPage
