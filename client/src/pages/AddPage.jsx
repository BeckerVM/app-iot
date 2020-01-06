import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

//COMPONENTES
import NavigationAdd from '../components/navigation/NavigationAdd'
import ArduinoListDevices from '../components/arduino/ArduinoListDevices'
import ArduinoCategoryDevices from '../components/arduino/ArduinoCategoryDevices'

//ACCIONES
import { GET_CATEGORIES, CLEAR_CATEGORIES } from '../actions/category'
import { CLEAR_DEVICES } from '../actions/device'

//COMPONENTE
const AddPage = function({ GET_CATEGORIES, devices, CLEAR_DEVICES, CLEAR_CATEGORIES }) {
  useEffect(() => {
    GET_CATEGORIES()
    
    return () => {
      CLEAR_DEVICES()
      CLEAR_CATEGORIES()
    }
  }, [])


  return (
    <div className="add">
      <div className="add__left">
        <NavigationAdd />
      </div>
      <div className="add__rigth">
        { devices.length === 0 && <ArduinoListDevices /> }
        { devices.length > 0 && <ArduinoCategoryDevices /> }
      </div>
    </div>
  )
}

AddPage.propTypes = {
  GET_CATEGORIES: PropTypes.func.isRequired,
  devices: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  devices: state.device.devices
})

export default connect(mapStateToProps, {
  GET_CATEGORIES,
  CLEAR_DEVICES,
  CLEAR_CATEGORIES
})(AddPage)
