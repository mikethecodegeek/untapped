'use strict';
module.exports = (sequelize, DataTypes) => {
  const BreweryRating = sequelize.define('BreweryRating', {
    userId: DataTypes.NUMBER,
    breweryId: DataTypes.NUMBER,
    rating: DataTypes.NUMBER
  }, {});
  BreweryRating.associate = function(models) {
    // associations can be defined here
    BreweryRating.belongsTo(models.Brewery, {foreignKey:'breweryId'})
  };
  return BreweryRating;
};