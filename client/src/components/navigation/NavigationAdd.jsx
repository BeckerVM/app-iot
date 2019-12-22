import React, { useState } from 'react'
import classNames from 'classnames'

const NavigationAdd = function () {
  const [clickedBtnSensor, setClickedBtnSensor] = useState(false)
  const [clickedBtnActuator, setClickedBtnActuator] = useState(false)

  return (
    <div className="navigation-add">
      <h3 className="navigation-add__title">Dispositivos & Componentes</h3>
      <div className="navigation-add__container-form">
        <form className="navigation-add__form">
          <input type="text" placeholder="Buscar..." />
          <i class="fas fa-search"></i>
        </form>
      </div>
      <div className="navigation-add__content">
        <strong>DISPOSITIVOS</strong>
        <div className="navigation-add__menu">
          <div className="navigation-add__item">
            <button onClick={() => setClickedBtnSensor(!clickedBtnSensor)} className="navigation-add__btn">
              <span>Sensores</span>
              <i className={classNames('fas', { 'fa-chevron-down': !clickedBtnSensor, 'fa-chevron-up': clickedBtnSensor })}></i>
            </button>
            {
              clickedBtnSensor ?
                (
                  <div className="navigation-add__submenu">
                    <span>Temperatura</span>
                    <span>Luminosidad</span>
                    <span>Proximidad</span>
                  </div>
                ) : null
            }
          </div>
        </div>
        <div className="navigation-add__menu">
          <div className="navigation-add__item">
            <button onClick={() => setClickedBtnActuator(!clickedBtnActuator)} className="navigation-add__btn">
              <span>Actuadores</span>
              <i className={classNames('fas', { 'fa-chevron-down': !clickedBtnActuator, 'fa-chevron-up': clickedBtnActuator })}></i>
            </button>
            {
              clickedBtnActuator ?
                (
                  <div className="navigation-add__submenu">
                    <span>Led</span>
                    <span>Motor</span>
                    <span>Relay</span>
                  </div>
                ) : null
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavigationAdd