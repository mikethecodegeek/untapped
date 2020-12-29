'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define('Rating', {
    userId: DataTypes.NUMBER,
    beerId: DataTypes.NUMBER,
    rating: DataTypes.NUMBER
  }, {});
  Rating.associate = function(models) {
    // associations can be defined here
    Rating.belongsTo(models.Beer,{foreignKey:'beerId'})
  };
  return Rating;
};