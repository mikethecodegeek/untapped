'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
     return queryInterface.bulkInsert('checkins', 
       [
         {userId:1, description:'Amazing beer', pic: null, rating:5, beerId:1,breweryId:1, createdAt: new Date(), updatedAt: new Date()},
         {userId:2, description:'Love this beer', pic: null, rating:4, beerId:1,breweryId:1, createdAt: new Date(), updatedAt: new Date()},
         {userId:3, description:'Awesome', pic: null, rating:5, beerId:1,breweryId:1, createdAt: new Date(), updatedAt: new Date()},
         {userId:4, description:'Great dinner time beer', pic: null, rating:4, beerId:1,breweryId:1, createdAt: new Date(), updatedAt: new Date()},
         {userId:5, description:'Perfect flavor', pic: null, rating:4, beerId:1,breweryId:1, createdAt: new Date(), updatedAt: new Date()},
         {userId:6, description:'Not my kind of beer', pic: null, rating:1, beerId:1,breweryId:1, createdAt: new Date(), updatedAt: new Date()},
         {userId:7, description:'Too hoppy', pic: null, rating:2, beerId:1,breweryId:1, createdAt: new Date(), updatedAt: new Date()},
        
       ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('checkins', null, {});
  }
};
