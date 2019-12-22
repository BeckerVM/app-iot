import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//COMPONENTES
import NavigationNew from '../components/navigation/NavigationNew'
import ArduinoContainerWidgets from '../components/arduino/ArduinoContainerWidgets'

//PAGINAS
import TestPage from './TestPage'
import AddPage from './AddPage'

const DashboardPage = function() {
  
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <header className="dashboard__header">
          <h1 className="dashboard__title">ByB<span>IOT</span></h1>
          <i className="fas fa-power-off text-white"></i>
        </header>
        <div className="dashboard__content">
          <aside className="dashboard__aside">
            <div className="dashboard__aside-header">
              <NavigationNew />
            </div>
            <div className="dashboard__aside-body">
              <ArduinoContainerWidgets />
            </div>
          </aside>
          <main className="dashboard__main">
            <div className="dashboard__main-content">
              <Router>
                <Switch>
                  <Route path="/bybiot/dashboard/test" component={TestPage} />
                  <Route path="/bybiot/dashboard/add" component={AddPage} />
                </Switch>
              </Router>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage

