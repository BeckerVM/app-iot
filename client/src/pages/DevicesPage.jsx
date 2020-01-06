import React, { useEffect } from 'react'
import { connect } from 'react-redux'

//COMPONENTES

//ACCIONES
import {  } from '../actions/category'
import {  } from '../actions/device'

//COMPONENTE
const DevicesPage = function({ }) {


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
        <div className="devices__device">
          <div className="devices__device-header">
            <span>LED ROJO</span>
            <i className="far fa-times-circle"></i>
          </div>
          <div className="devices__device-content">
            <div className="devices__device-component">
              <i className="fas fa-lightbulb"></i>
            </div>
          </div>
        </div>
        <div className="devices__device">
          <div className="devices__device-header">
            <span>LED ROJO</span>
            <i className="far fa-times-circle"></i>
          </div>
          <div className="devices__device-content">
            <div className="devices__device-component">
              <i className="fas fa-lightbulb"></i>
            </div>
          </div>
        </div>
        <div className="devices__device">
          <div className="devices__device-header">
            <span>LED ROJO</span>
            <i className="far fa-times-circle"></i>
          </div>
          <div className="devices__device-content">
            <div className="devices__device-component">
              <i className="fas fa-lightbulb"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = state => ({
  devices: state.device.devices
})

export default connect(mapStateToProps, {
})(DevicesPage)
