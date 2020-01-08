import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Link } from 'react-router-dom'

//COMPONENTES
import NavigationNew from '../components/navigation/NavigationNew'
import ArduinoContainerWidgets from '../components/arduino/ArduinoContainerWidgets'

//PAGINAS
import TestPage from './TestPage'
import AddPage from './AddPage'
import DevicesPage from './DevicesPage'

//ACCIONES
import { IS_CONNECTED, CONNECTING_SOCKET } from '../actions/socket'

const DashboardPage = function ({ history ,socket, connectedArduino, IS_CONNECTED, CONNECTING_SOCKET }) {

  useEffect(() => {
    if(socket) {
      socket.on('arduino-connected', (connected) => {
        IS_CONNECTED(connected)
      })
    } else {
      CONNECTING_SOCKET(history)
    }
  })

  let asideContent = (
    <div className="dashboard__connect">
      <i className="fas fa-plug"></i>
      <span>ARDUINO NO CONECTADO</span> 
    </div>
  )

  if (connectedArduino) {
    asideContent = (
      <>
        <div className="dashboard__aside-header">
          <NavigationNew />
        </div>
        <div className="dashboard__aside-body">
          <ArduinoContainerWidgets />
        </div>
      </>
    )
  }

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <header className="dashboard__header">
          {!connectedArduino && <div className="dashboard__alert dashboard__alert-danger">ARDUINO OFFLINE</div>}
          {connectedArduino && <div className="dashboard__alert dashboard__alert-success">ARDUINO ONLINE</div>}
          <Link to="/bybiot/dashboard" className="dashboard__title">BYB<span>IOT</span></Link>
          <i className="fas fa-power-off text-white"></i>
        </header>
        <div className="dashboard__content">
          <aside className="dashboard__aside">
            {
              asideContent
            }
          </aside>
          <main className="dashboard__main">
            <div className="dashboard__main-content">
              <Switch>
                <Route path="/bybiot/dashboard/test" component={TestPage} />
                <Route path="/bybiot/dashboard/add" component={AddPage} />
                <Route path="/bybiot/dashboard/devices" component={DevicesPage} />
              </Switch>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  socket: state.socket.socket,
  connectedArduino: state.socket.connectedArduino
})

export default connect(mapStateToProps, {
  IS_CONNECTED,
  CONNECTING_SOCKET
})(DashboardPage)

