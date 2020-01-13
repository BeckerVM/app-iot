import React, { useEffect } from 'react'
import socket from '../socket'

const TestPage = function() {
  return (
    <div className="devices">
      <div className="devices__header">
        <div className="devices__header-left">
          <span><i className="fas fa-network-wired"></i> Vision General</span>
        </div>
        <div className="devices__header-right">
          <span>Arduino <i className="fas fa-laptop-code"></i></span>
        </div>
      </div>
    </div>
  )
}

export default TestPage
