import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

//COMPONENTES
import NavigationAdd from '../components/navigation/NavigationAdd'
import ArduinoListDevices from '../components/arduino/ArduinoListDevices'
import ArduinoCategoryDevices from '../components/arduino/ArduinoCategoryDevices'

//ACCIONES
import { GET_CATEGORIES } from '../actions/category'

//COMPONENTE
const AddPage = function({ GET_CATEGORIES }) {
  useEffect(() => {
    GET_CATEGORIES()
  }, [])


  return (
    <div className="add">
      <div className="add__left">
        <NavigationAdd />
      </div>
      <div className="add__rigth">
        { true && <ArduinoListDevices /> }
        { false && <ArduinoCategoryDevices /> }
      </div>
    </div>
  )
}

AddPage.propTypes = {
  GET_CATEGORIES: PropTypes.func.isRequired
}

export default connect(null, {
  GET_CATEGORIES
})(AddPage)
