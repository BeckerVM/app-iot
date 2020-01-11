import React, { useEffect } from 'react'
import { connect } from 'react-redux'

//COMPONENTES
import Led from '../components/arduino-components/Led'
import Servo from '../components/arduino-components/Servo'
//ACCIONES
import { GET_MY_DEVICES } from '../actions/socket'

//COMPONENTE
const DevicesPage = function({ socket, myDevices, GET_MY_DEVICES }) {
  useEffect(() => {
    socket.on('get-devices', (devices) => {
      GET_MY_DEVICES(devices)
    })
  }, [])
  
  return (
    <div className="devices">
      <div className="devices__header">
        <div className="devices__header-left">
          <span><i className="fas fa-network-wired"></i> Vision General</span>
        </div>
        <div className="devices__header-right">
          <span>Arduino <i className="fas fa-laptop-code"></i></span>
        </div>
      </div>
      <div className="devices__content">
        {
          myDevices.map((device) =>{
            switch(device.type) {
              case 'Led':
                return <Led key={device.id} device={device} />
              case 'Micro Servo sg90':
                return <Servo key={device.id} device={device} />
            }
          })
        }
      </div>
    </div>
  )
}


const mapStateToProps = state => ({
  socket: state.socket.socket,
  myDevices: state.socket.myDevices
})

export default connect(mapStateToProps, {
  GET_MY_DEVICES
})(DevicesPage)
