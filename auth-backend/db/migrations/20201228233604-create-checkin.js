'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('checkins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {model:'Users'}
      },
      description: {
        type: Sequelize.STRING
      },
      pic: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.INTEGER
      },
      beerId: {
        type: Sequelize.INTEGER,
        references: {model:'Beers'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('checkins');
  }
};