import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

//COMPONENTES
import ChartTemperature from '../charts/ChartTemperature'

const LM = function ({ device, socket }) {
  const [openedModal, SET_OPENED_MODAL] = useState(false)
  const [c, SET_C] = useState('')
  const [dataLm, SET_DATA_LM] = useState([{
    name: "Temperatura",
    data: []
  }])

  useEffect(() => {
    socket.on('send-data-lm', (data) => {
      SET_DATA_LM([{
        name: 'Temperatura',
        data: data.data
      }])

      SET_C(data.c)
    })
  }, [])

  return (
    <div className="devices__device">
      <div className="devices__device-header">
        <span>TEMP 1</span>
        <i  className="far fa-times-circle"></i>
      </div>
      <div className="devices__device-content">
        <div onClick={() => SET_OPENED_MODAL(!openedModal)} className={classNames('devices__device-component')}>
          <i className="fas fa-thermometer-three-quarters fa-2x"></i>
        </div>
      </div>
      <div className={classNames('modal', { 'active': openedModal })}>
        <div className="modal__back" onClick={() => SET_OPENED_MODAL(!openedModal)}>

        </div>
        <div className="modal__front">
          <div className="modal__header">
            <button 
              className="modal__button"
              onClick={() => {
                socket.emit('lm', device)
              }}
            >
              Run
            </button>
          </div>
          <div className="modal__body">
            <ChartTemperature series={dataLm} />
            <span>°C: {c} </span>
          </div>
          <div className="modal__footer">
            <button className="modal__button">GUARDAR</button>
            <button className="modal__button" onClick={() => SET_OPENED_MODAL(!openedModal)}>CERRAR</button>
          </div>
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = state => ({
  socket: state.socket.socket
})
export default connect(mapStateToProps)(LM)