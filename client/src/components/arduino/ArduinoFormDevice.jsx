import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

//COMPONENTE
const ArduinoFormDevice = function({ newDevice, connectedArduino, socket, history }) {
  const [device, SET_DEVICE] = useState({
    name: '',
    type: '',
    pin: ''
  })
  
  useEffect(() => {
    SET_DEVICE({
      ...device,
      name: newDevice.name,
      type: newDevice.name
    })
  }, [newDevice])

  const CHANGE_INPUT_VALUE = (e) => {
    SET_DEVICE({
      ...device,
      [e.target.name]: e.target.value
    })
  }

  const SUBMIT_DATA_DEVICE = (e) => {
    e.preventDefault()
    socket.emit('add-device', device)
    history.push('/bybiot/dashboard/devices')
  }

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
      <form onSubmit={SUBMIT_DATA_DEVICE}>
        <div className="arduino-form-device__container-input">
          <span>Nombre dispositivo</span>
          <input value={device.name} onChange={CHANGE_INPUT_VALUE} name="name" type="text"/>
        </div>
        <div className="arduino-form-device__container-input">
          <span>Pin</span>
          <input value={device.pin} onChange={CHANGE_INPUT_VALUE} name="pin" type="text"/>
        </div>
        <div className="arduino-form-device__container-input">
          <span>Componente o Dispositivo</span>
          <input type="text" value={newDevice.name} />
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
  connectedArduino: state.socket.connectedArduino,
  socket: state.socket.socket
})

export default withRouter(connect(mapStateToProps)(ArduinoFormDevice))

