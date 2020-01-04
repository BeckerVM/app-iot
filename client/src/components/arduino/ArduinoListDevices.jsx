import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ArduinoItemDevice from './ArduinoItemDevice'

const ArduinoListDevices = function ({ categories }) {
  
  return (
    <div className="arduino-list-devices">
      <div className="arduino-list-devices__content">
        {
          categories.map(category => 
            <ArduinoItemDevice 
              category={category.category} 
              subcategories={category.subcategories}
              key={category.category.id} 
            />
          )
        }
      </div>
    </div>
  )
}

ArduinoListDevices.propTypes = {
  categories: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  categories: state.category.categories
})

export default connect(mapStateToProps)(ArduinoListDevices)
