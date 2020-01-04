import React, { useState } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import { GET_DEVICES_BY_SUBCATEGORY } from '../../actions/device'

const NavigationAdd = function ({ GET_DEVICES_BY_SUBCATEGORY }) {
  const [clickedBtnSensor, SET_CLICKED_BTN_SENSOR] = useState(false)
  const [clickedBtnActuator, SET_CLICKED_BTN_ACTUATOR] = useState(false)
  const [clickedBtnExtention, SET_CLICKED_BTN_EXTENTION] = useState(false)

  return (
    <div className="navigation-add">
      <h3 className="navigation-add__title">Dispositivos & Componentes</h3>
      <div className="navigation-add__container-form">
        <form className="navigation-add__form">
          <input type="text" placeholder="Buscar..." />
          <i className="fas fa-search"></i>
        </form>
      </div>
      <div className="navigation-add__content">
        <strong>DISPOSITIVOS</strong>
        <div className="navigation-add__menu">
          <div className="navigation-add__item">
            <button onClick={() => SET_CLICKED_BTN_SENSOR(!clickedBtnSensor)} className="navigation-add__btn">
              <span>Sensores</span>
              <i className={classNames('fas', { 'fa-chevron-down': !clickedBtnSensor, 'fa-chevron-up': clickedBtnSensor })}></i>
            </button>
            {
              clickedBtnSensor ?
                (
                  <div className="navigation-add__submenu">
                    <span onClick={() => GET_DEVICES_BY_SUBCATEGORY(1)}>Temperatura</span>
                    <span onClick={() => GET_DEVICES_BY_SUBCATEGORY(2)}>Luminosidad</span>
                    <span onClick={() => GET_DEVICES_BY_SUBCATEGORY(3)}>Proximidad</span>
                  </div>
                ) : null
            }
          </div>
        </div>
        <div className="navigation-add__menu mb-sm">
          <div className="navigation-add__item">
            <button onClick={() => SET_CLICKED_BTN_ACTUATOR(!clickedBtnActuator)} className="navigation-add__btn">
              <span>Actuadores</span>
              <i className={classNames('fas', { 'fa-chevron-down': !clickedBtnActuator, 'fa-chevron-up': clickedBtnActuator })}></i>
            </button>
            {
              clickedBtnActuator ?
                (
                  <div className="navigation-add__submenu">
                    <span onClick={() => GET_DEVICES_BY_SUBCATEGORY(4)}>Led</span>
                    <span onClick={() => GET_DEVICES_BY_SUBCATEGORY(5)}>Motor</span>
                    <span>Relay</span>
                  </div>
                ) : null
            }
          </div>
          <div className="navigation-add__menu mb-sm">
            <div className="navigation-add__item">
              <button onClick={() => SET_CLICKED_BTN_EXTENTION(!clickedBtnExtention)} className="navigation-add__btn">
                <span>Extensiones</span>
                <i className={classNames('fas', { 'fa-chevron-down': !clickedBtnExtention, 'fa-chevron-up': clickedBtnExtention })}></i>
              </button>
              {
                clickedBtnExtention ?
                  (
                    <div className="navigation-add__submenu">
                      <span>Convertidor analogico</span>
                      <span>Puerto GPIO</span>
                    </div>
                  ) : null
              }
            </div>
          </div>
        </div>
        <strong>BYBIOT API</strong>
        <div className="navigation-add__menu text-center">
          <button className="navigation-add__btn-api">No tenemos una :v</button>
        </div>
      </div>
    </div>
  )
}

export default connect(null, {
  GET_DEVICES_BY_SUBCATEGORY
})(NavigationAdd)