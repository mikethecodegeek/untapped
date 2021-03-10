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
     return queryInterface.bulkInsert('Types', 
       [
         {name:'IPA Imperial/Double', createdAt: new Date(), updatedAt: new Date()},
         {name:'Stout Irish Dry', createdAt: new Date(), updatedAt: new Date()},
         {name:'Lager American Dry', createdAt: new Date(), updatedAt: new Date()},
         {name:'Lager American Red/Amber', createdAt: new Date(), updatedAt: new Date()},
         {name:'Stout - Imperial / Double Milk', createdAt: new Date(), updatedAt: new Date()},
         {name:'Pale Ale - American', createdAt: new Date(), updatedAt: new Date()},
         {name:'IPA - Imperial / Double New England', createdAt: new Date(), updatedAt: new Date()},
         {name:'IPA - American', createdAt: new Date(), updatedAt: new Date()},
         {name:'IPA - New England', createdAt: new Date(), updatedAt: new Date()},
         {name:'Hard Cider', createdAt: new Date(), updatedAt: new Date()},
       ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Types', null, {});
  }
};
