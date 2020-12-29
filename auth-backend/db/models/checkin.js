'use strict';
module.exports = (sequelize, DataTypes) => {
  const checkin = sequelize.define('checkin', {
    userId: DataTypes.INTEGER,
    description: DataTypes.STRING,
    pic: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    beerId: DataTypes.INTEGER
  }, {});
  checkin.associate = function(models) {
    // associations can be defined here
    checkin.belongsTo(models.User, {foreignKey: 'userId'});
    checkin.belongsTo(models.Beer, {foreignKey: 'beerId'});
  };
  return checkin;
};