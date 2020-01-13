import React, { useState } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

const ArduinoContainerWidgets = function ({ myDevices }) {
  const [clickedBtnWidgets, setClickedBtnWidgets] = useState(true)

  return (
    <div className="arduino-container-widgets">
      <button onClick={() => setClickedBtnWidgets(!clickedBtnWidgets)} className="arduino-container-widgets__btn">
        <span>Arduino</span>
        <i className={classNames('fas', { 'fa-chevron-down': !clickedBtnWidgets, 'fa-chevron-up': clickedBtnWidgets })}></i>
      </button>
      {
        clickedBtnWidgets ?
          (
            <div className="arduino-container-widgets__list">
              {
                myDevices.map(device => 
                  <span className="arduino-container-widgets__list-item" key={device.id}>
                    <i className="fas fa-plug"></i> { device.name }
                  </span>
                )
              }
              {
                myDevices.length === 0 
                && 
                <span className="arduino-container-widgets__list-item">
                  No hay componentes agregados
                </span>
              }
            </div>
          ) :
          null
      }
    </div>
  )
}

const mapStateToProps = state => ({
  myDevices: state.socket.myDevices
})

export default connect(mapStateToProps)(ArduinoContainerWidgets)