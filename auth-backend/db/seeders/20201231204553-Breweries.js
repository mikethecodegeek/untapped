"use strict";

const {
  searchBeersAndBrews,
} = require("../../../auth-front-end/src/store/search");

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
    return queryInterface.bulkInsert(
      "Breweries",
      [
        {
          name: "Anheuser-Busch",
          city: "St Louis",
          state: "MI",
          breweryType: 1,
          description:
            "The leading American brewer, bringing people together for more than 160 years.",
          createdAt: new Date(),
          updatedAt: new Date(),
          imgUrl: null
        },
        {
          name: "Toppling Goliath Brewing Co.",
          city: "Decorah",
          state: "IA",
          breweryType: 1,
          description:
            "Founded in 2009 in beautiful Decorah, Iowa. Less than a decade later we have become world-renown for our IPAs and barrel-aged stouts, distributing to over 27 states and brewing more than 35 beers.",
          createdAt: new Date(),
          updatedAt: new Date(),
          imgUrl: '	https://brewerydb-images.s3.amazonaws.com/brewery/BznahA/upload_0FkKKl-squareLarge.png'
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Breweries", null, {});
  },
};
