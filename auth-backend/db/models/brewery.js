'use strict';
module.exports = (sequelize, DataTypes) => {
  const Brewery = sequelize.define('Brewery', {
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    breweryType: DataTypes.NUMBER,
    description: DataTypes.STRING
  }, {});
  Brewery.associate = function(models) {
    // associations can be defined here
    Brewery.hasMany(models.Beer, {foreignKey:'brewery'})
    Brewery.belongsTo(models.BreweryType, {foreignKey:'breweryType'})
  };
  return Brewery;
};