import React, { useState } from 'react'
import { connect } from 'react-redux'
import InputRange from 'react-input-range'

//ESTILOS 
import 'react-input-range/lib/css/index.css'

const Servo = function ({ device, socket }) {
  const CHANGE_RANK_SERVO = (value) => {
    socket.emit('servo', { myServo: device, value })
  }

  return (
    <div className="devices__device">
      <div className="devices__device-header">
        <span>{device.name}</span>
        <i onClick={() => {
          socket.emit('delete-device', device)
        }} className="far fa-times-circle"></i>
      </div>
      <div className="devices__device-content">
        <InputRange
          minValue={0}
          maxValue={180}
          value={device.value}
          onChange={value => CHANGE_RANK_SERVO(value)}
        />
      </div>
    </div>
  )
}


const mapStateToProps = state => ({
  socket: state.socket.socket
})
export default connect(mapStateToProps)(Servo)