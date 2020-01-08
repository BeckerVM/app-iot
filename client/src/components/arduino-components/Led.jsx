import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

const Led = function ({ device, socket }) {
  const CLICK__LED = () => {
    let updateDevice = { ...device, value: !device.value }
    console.log(updateDevice)
    socket.emit('led', updateDevice)
  }

  return (
    <div className="devices__device">
      <div className="devices__device-header">
        <span>{ device.name }</span>
        <i className="far fa-times-circle"></i>
      </div>
      <div className="devices__device-content">
        <div onClick={CLICK__LED} className={classNames('devices__device-component', { active: device.value })}>
          <i className="fas fa-lightbulb"></i>
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = state => ({
  socket: state.socket.socket
})
export default connect(mapStateToProps)(Led)