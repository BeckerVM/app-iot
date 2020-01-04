import React from 'react'

//COMPONENTES

const ArduinoItemDevice = function ({ category, subcategories }) {

  return (
    <div className="arduino-list-devices__list">
      <h4>{category.name}</h4>
      <div className="arduino-list-devices__list-content">
        {
          subcategories.map(subcategory =>
            <div key={subcategory.id} className="arduino-list-devices__item">
              <img src={subcategory.imageUrl} alt="Sensor Temperatura" />
              <span>{subcategory.name}</span>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default ArduinoItemDevice