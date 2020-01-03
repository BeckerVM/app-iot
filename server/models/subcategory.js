'use strict';
module.exports = (sequelize, DataTypes) => {
  const SubCategory = sequelize.define('SubCategory', {
    name: DataTypes.STRING
  }, {});
  SubCategory.associate = function(models) {
    SubCategory.belongsTo(models.Category)
    SubCategory.hasMany(models.Device)
  };
  return SubCategory;
};