import React from 'react'

const ArduinoFormDevice =function() {
  return (
    <div className="arduino-form-device">
      <h5 className="arduino-form-device__title">Ingresar configuracion</h5>
      <div className="arduino-form-device__device">
        <img width="116" height="116" src="https://s3.amazonaws.com/mydevices-images/raspberryPi/sensors/200x200/Servo-Motor.png" alt="Dispositivo"/>
        <div>
          <strong>Servo Motor</strong>
          <span>Controla un Servo Motor</span>
        </div>
      </div>
      <div className="arduino-form-device__alert">
        <p>Por favor corrige los siguientes errores: </p>
        <span>->  Por favor conecte el dispositivo</span>
      </div>

      <form>
        <div className="arduino-form-device__container-input">
          <span>Nombre dispositivo</span>
          <input type="text"/>
        </div>
        <div className="arduino-form-device__container-input">
          <span>Pin</span>
          <input type="text"/>
        </div>

        <button disabled type="submit">
          Agregar dispositivo
        </button>
      </form>
    </div>
  )
}

export default ArduinoFormDevice

