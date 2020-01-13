import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

//COMPONENTE
const NavigationNew = function () {
  const [clickedBtnNew, SET_CLICKED_BTN_NEW] = useState(false)

  return (
    <>
      <button
        onClick={() => SET_CLICKED_BTN_NEW(!clickedBtnNew)}
        className={classNames('dashboard__btn-new', { 'active': clickedBtnNew })}>
        <span>Añadir nuevo...</span> <i className="fas fa-chevron-down"></i>
      </button>
      {
        clickedBtnNew ?
          (
            <div className="dashboard__options">
              <Link to="/bybiot/dashboard/add" className="dashboard__options-link">Dispositivo y Componentes</Link>
              <Link to="/bybiot/dashboard/devices" className="dashboard__options-link">Mis dispositivos</Link>
              <Link to="/bybiot/dashboard" className="dashboard__options-link">Proyecto</Link>
            </div>
          ) :
          null
      }
    </>
  )
}

export default NavigationNew
