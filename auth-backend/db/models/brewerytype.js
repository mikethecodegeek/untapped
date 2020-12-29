'use strict';
module.exports = (sequelize, DataTypes) => {
  const BreweryType = sequelize.define('BreweryType', {
    name: DataTypes.STRING
  }, {});
  BreweryType.associate = function(models) {
    // associations can be defined here
    BreweryType.hasMany(models.Brewery,{foreignKey: 'breweryType' })
  };
  return BreweryType;
};