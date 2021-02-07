"use strict";

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
          name: "Toppling Goliath Brewing Co",
          city: "Decorah",
          state: "IA",
          breweryType: 1,
          description: 'Founded in 2009 in beautiful Decorah, Iowa. Less than a decade later we have become world-renown for our IPAs and barrel-aged stouts, distributing to over 27 states and brewing more than 35 beers.',
          imgUrl: "https://brewerydb-images.s3.amazonaws.com/brewery/ZQo2s5/upload_exak3V-squareLarge.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Anheuser-Busch",
          city: "St. Louis",
          state: "MI",
          breweryType: 1,
          description: 'The leading American brewer, bringing people together for more than 160 years.',
          imgUrl: "https://brewerydb-images.s3.amazonaws.com/brewery/BznahA/upload_0FkKKl-squareLarge.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Guinness",
          city: "St. James",
          state: "Ireland",
          breweryType: 2,
          description: 'The Guinness® brand enjoys a global reputation as a uniquely authentic beer and the best-selling stout in the world. Famous for its dark color, creamy head and unique surge and settle, this distinctive beer originated at the St. James’s Gate brewery in Dublin, Ireland. Over 10 million glasses of Guinness beer are enjoyed every single day around the world, and 1.8 billion pints are sold every year.',
          imgUrl: "https://untappd.akamaized.net/site/brewery_logos/brewery-49_49cf6.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Coors Brewing Company",
          city: "Golden",
          state: "CO",
          breweryType: 2,
          description: 'During and after the alcohol prohibition, the Coors Brewing Company managed to survive and thrive. Currently, Coors Brewery produces over twenty brands of beers across the country. Among its notable beers are Blue Moon and Killian’s.',
          imgUrl: "https://untappd.akamaized.net/site/brewery_logos/brewery-coors.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
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
