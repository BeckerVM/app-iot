import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

//COMPONENTES
import Led from '../components/arduino-components/Led'
//ACCIONES

//COMPONENTE
const DevicesPage = function({ socket }) {
  const [devices, SET_DEVICES] = useState([])

  useEffect(() => {
    socket.on('get-devices', (devices) => {
      SET_DEVICES(devices)
    })
  }, [])
  
  return (
    <div className="devices">
      <div className="devices__header">
        <div className="devices__header-left">
          <span><i className="fas fa-network-wired"></i> Vision General</span>
        </div>
        <div className="devices__header-right">
          <span>Arduino <i class="fas fa-laptop-code"></i></span>
        </div>
      </div>
      <div className="devices__content">
        {
          devices.map((device) =>
            <Led key={device.id} device={device} />
          )
        }
      </div>
    </div>
  )
}


const mapStateToProps = state => ({
  socket: state.socket.socket
})

export default connect(mapStateToProps, {
})(DevicesPage)
