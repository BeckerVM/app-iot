import React from 'react'
import { connect } from 'react-redux'

//COMPONENTE
const ArduinoFormDevice = function({ newDevice, connectedArduino }) {
  return (
    <div className="arduino-form-device">
      <h5 className="arduino-form-device__title">Ingresar configuracion</h5>
      <div className="arduino-form-device__device">
        <img width="116" height="116" src={newDevice.imageUrl} alt={newDevice.name}/>
        <div>
          <strong>{ newDevice.name }</strong>
          <span>{ newDevice.description }</span>
        </div>
      </div>
      {
        !connectedArduino 
        &&
        <div className="arduino-form-device__alert">
          <p>Por favor corrige los siguientes errores: </p>
          <span>->  Por favor conecte el arduino</span>
        </div>
      }
      <form>
        <div className="arduino-form-device__container-input">
          <span>Nombre dispositivo</span>
          <input type="text"/>
        </div>
        <div className="arduino-form-device__container-input">
          <span>Pin</span>
          <input type="text"/>
        </div>

        <button disabled={!connectedArduino} type="submit">
          Agregar dispositivo
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  newDevice: state.device.newDevice,
  connectedArduino: state.socket.connectedArduino
})

export default connect(mapStateToProps)(ArduinoFormDevice)

