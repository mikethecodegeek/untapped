'use strict';
const faker = require('faker')
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
      const checkins = []
      const createCheckins = (beerId, brewId) => {
        // console.log('create checkins hit')
        for (let user=2;user<5;user++) {

          for (let a=0; a<1;a++) {
            const rand = Math.floor(Math.random()*5)+1
            const checkin = 
            {
              userId:Math.floor(Math.random()*23)+2, 
              description:faker.lorem.sentence(5), 
              pic: null, 
              rating:rand, 
              beerId:beerId,
              breweryId:brewId, 
              createdAt: new Date(), 
              updatedAt: new Date()
            }
            checkins.push(checkin)
          }
        }
      }
      const createAllCheckins = () => {
        // console.log('creating checkins')
        const rand = Math.random(Math.floor()*10)+1
        for (let a=2; a<92; a+=rand) {
            switch(true){
              case a<10:
              createCheckins(a,1)  
              break;
              case a<21:
              createCheckins(a,2)  
              break;
              case a<26:
              createCheckins(a,3)  
              break;
              case a<31:
              createCheckins(a,4)  
              break;
              case a<38:
              createCheckins(a,5)  
              break;
              case a<43:
              createCheckins(a,6)  
              break;
              case a<46:
              createCheckins(a,7)  
              break;
              case a<49:
              createCheckins(a,8)  
              break;
              case a<51:
              createCheckins(a,9)  
              break;
              case a<55:
              createCheckins(a,10)  
              break;
              case a<58:
              createCheckins(a,11)  
              break;
              case a<60:
              createCheckins(a,12)  
              break;
              case a<63:
              createCheckins(a,13)  
              break;
              case a<67:
              createCheckins(a,14)  
              break;
              case a<73:
              createCheckins(a,15)  
              break;
              case a<77:
              createCheckins(a,16)  
              break;
              case a<82:
              createCheckins(a,17)  
              break;
              case a<87:
              createCheckins(a,18)  
              break;
              case a<90:
              createCheckins(a,19)  
              break;
              case a<91:
              createCheckins(a,20)  
              break;
            }

        }
      }

      createAllCheckins()
    
     return queryInterface.bulkInsert('checkins', 
       [
         ...checkins,
         {userId:1, description:'Amazing beer', pic: null, rating:5, beerId:1,breweryId:1, createdAt: new Date(), updatedAt: new Date()},
         {userId:1, description:'Love this beer', pic: null, rating:4, beerId:8,breweryId:1, createdAt: new Date(), updatedAt: new Date()},
         {userId:1, description:'Awesome', pic: null, rating:5, beerId:25,breweryId:3, createdAt: new Date(), updatedAt: new Date()},
         {userId:1, description:'Great dinner time beer', pic: null, rating:4, beerId:28,breweryId:3, createdAt: new Date(), updatedAt: new Date()},
         {userId:1, description:'Perfect flavor', pic: null, rating:4, beerId:40,breweryId:6, createdAt: new Date(), updatedAt: new Date()},
         {userId:1, description:'Not my kind of beer', pic: null, rating:1, beerId:48,breweryId:8, createdAt: new Date(), updatedAt: new Date()},
         {userId:1, description:'Too hoppy', pic: null, rating:2, beerId:83,breweryId:18, createdAt: new Date(), updatedAt: new Date()},
        
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
