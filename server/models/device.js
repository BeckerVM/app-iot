'use strict';
module.exports = (sequelize, DataTypes) => {
  const Device = sequelize.define('Device', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  }, {});
  Device.associate = function(models) {
    // associations can be defined here
    Device.belongsTo(models.SubCategory)
  };
  return Device;
};