import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

//COMPONENTES
import ChartProximity from '../charts/ChartProximity'

const LM = function ({ device, socket }) {
  const [openedModal, SET_OPENED_MODAL] = useState(false)
  const [dataProximity, SET_DATA_PROXIMITY] = useState([0])

  useEffect(() => {
    socket.on('send-data-proximity', (data) => {
      SET_DATA_PROXIMITY([data])
    })
  }, [])

  return (
    <div className="devices__device">
      <div className="devices__device-header">
        <span>Proximity 1</span>
        <i  className="far fa-times-circle"></i>
      </div>
      <div className="devices__device-content">
        <div onClick={() => SET_OPENED_MODAL(!openedModal)} className={classNames('devices__device-component')}>
          <i className="fas fa-ruler fa-2x"></i>
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
                socket.emit('proximity', device)
              }}
            >
              Run
            </button>
          </div>
          <div className="modal__body">
            <ChartProximity series={dataProximity} />
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