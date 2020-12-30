'use strict';
module.exports = (sequelize, DataTypes) => {
  const checkin = sequelize.define('checkin', {
    userId: DataTypes.INTEGER,
    description: DataTypes.STRING,
    pic: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    beerId: DataTypes.INTEGER,
    breweryId: DataTypes.INTEGER
  }, {});
  checkin.associate = function(models) {
    // associations can be defined here
    checkin.belongsTo(models.User, {foreignKey: 'userId'});
    checkin.belongsTo(models.Beer, {foreignKey: 'beerId'});
    checkin.belongsTo(models.Brewery, {foreignKey: 'breweryId'});
    // checkin.belongsToMany(models.Brewery, 
    //   {
    //     through: 'Beer',
    //     foreignKey: 'beerId',
    //     otherKey: 'brewery'
    //   }
    //   )
  };
  return checkin;
};