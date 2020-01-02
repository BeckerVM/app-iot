import React, { useState } from 'react'
import classNames from 'classnames'

const ArduinoContainerWidgets = function () {
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
              <span className="arduino-container-widgets__list-item">
                <i className="fas fa-lightbulb text-green-1"></i> Verde
              </span>
              <span className="arduino-container-widgets__list-item">
                <i className="fas fa-lightbulb text-yellow-1"></i> Amarillo
              </span>
              <span className="arduino-container-widgets__list-item">
                <i class="fas fa-lightbulb text-blue-1"></i> Azul
              </span>
              <span className="arduino-container-widgets__list-item">
                <i class="fas fa-lightbulb text-red-1"></i> Rojo
              </span>
            </div>
          ) :
          null
      }
    </div>
  )
}

export default ArduinoContainerWidgets