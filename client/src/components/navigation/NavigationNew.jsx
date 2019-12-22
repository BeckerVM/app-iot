import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

const NavigationNew = function () {
  const [clickedBtnNew, setClickedBtnNew] = useState(false)

  return (
    <>
      <button
        onClick={() => setClickedBtnNew(!clickedBtnNew)}
        className={classNames('dashboard__btn-new', { 'active': clickedBtnNew })}>
        <span>Añadir nuevo...</span> <i className="fas fa-chevron-down"></i>
      </button>
      {
        clickedBtnNew ?
          (
            <div className="dashboard__options">
              <Link to="/bybiot/dashboard/add" className="dashboard__options-link">Dispositivo y Componentes</Link>
              <a className="dashboard__options-link" href="#">Evento</a>
              <a className="dashboard__options-link" href="#">Proyecto</a>
            </div>
          ) :
          null
      }
    </>
  )
}

export default NavigationNew
