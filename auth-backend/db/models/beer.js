'use strict';
module.exports = (sequelize, DataTypes) => {
  const Beer = sequelize.define('Beer', {
    name: DataTypes.STRING,
    brewery: DataTypes.NUMBER,
    type: DataTypes.NUMBER,
    abv: DataTypes.NUMBER,
    ibu: DataTypes.NUMBER,
    description: DataTypes.STRING,
    imgUrl: DataTypes.STRING
    
  }, {});
  Beer.associate = function(models) {
    // associations can be defined here
    Beer.belongsTo(models.Brewery, {foreignKey:'brewery'})
    Beer.belongsTo(models.Type, {foreignKey:'type'})
    Beer.hasMany(models.checkin, {foreignKey: 'beerId'});
  };
  return Beer;
};