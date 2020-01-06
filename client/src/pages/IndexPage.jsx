import React from 'react'
import { connect } from 'react-redux'

//ACCIONES
import { CONNECTING_SOCKET } from '../actions/socket'

const IndexPage = function({ CONNECTING_SOCKET, history }) {
  return (
    <div className="index">
      <div className="index__content">
        <h1>
          <i className="fas fa-tablet-alt"></i> BYBIOT
          PLATAFORMA IOT
        </h1>
        <button
          onClick={() => CONNECTING_SOCKET(history)}
        >
          COMENZAR
        </button>
      </div>
    </div>
  )
}


export default connect(null, {
  CONNECTING_SOCKET
})(IndexPage)