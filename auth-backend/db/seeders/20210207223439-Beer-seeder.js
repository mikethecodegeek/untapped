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
      "Beers",
      [
        {
          name: "Dolphin Sparkles",
          brewery: 1,
          type: 1,
          abv: 7,
          ibu: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
          imgurl: 'https://untappd.akamaized.net/site/beer_logos/beer-3217885_4b766_sm.jpeg',
          description: 'Dolphin Sparkles is our collective interpretation and re-imagining of a West Coast IPA.',

        },
        {
          name: "Budweiser",
          brewery: 3,
          type: 3,
          abv: 5,
          ibu:12,
          createdAt: new Date(),
          updatedAt: new Date(),
          imgurl: 'https://untappd.akamaized.net/site/beer_logos/beer-3783_b208c_sm.jpeg',
          description: 'Known as "The King of Beers," Budweiser was first introduced by Adolphus Busch in 1876 and it\'s still brewed with the same high standards today. Budweiser is a medium-bodied, flavorful, crisp American-style lager.',

        },
        {
          name: "Bud-Light",
          brewery: 3,
          type: 3,
          abv: 4,
          ibu:6,
          createdAt: new Date(),
          updatedAt: new Date(),
          imgurl: 'https://untappd.akamaized.net/site/beer_logos/beer-3784_0e2c3_sm.jpeg',
          description: 'Bud Light is brewed using a blend of premium aroma hop varieties, both American-grown and imported, and a combination of barley malts and rice. Its superior drinkability and refreshing flavor makes it the world’s favorite light beer.',

        },
        {
          name: "Michelob ULTRA",
          brewery: 3,
          type: 3,
          abv: 4,
          ibu:6,
          createdAt: new Date(),
          updatedAt: new Date(),
          imgurl: 'https://untappd.akamaized.net/site/beer_logos/beer-6655_afc4e_sm.jpeg',
          description: 'A superior light beer. Brewed using the finest barley malt, select grains, all-imported hops and a pure-cultured yeast strain.',

        },
        {
          name: "Guinness Draught",
          brewery: 4,
          type: 2,
          abv: 4,
          ibu:45,
          createdAt: new Date(),
          updatedAt: new Date(),
          imgurl: 'https://untappd.akamaized.net/site/beer_logos/beer-6655_afc4e_sm.jpeg',
          description: 'Swirling clouds tumble as the storm begins to calm. Settle. Breathe in the moment, then break through the smooth, light head to the bittersweet reward.',

        },
        {
          name: "Coors Banquet",
          brewery: 5,
          type: 3,
          abv: 5,
          ibu:40,
          createdAt: new Date(),
          updatedAt: new Date(),
          imgurl: 'https://untappd.akamaized.net/site/beer_logos/beer-3833_6619d_sm.jpeg',
          description: 'Coors beer, first introduced by Adolph Coors in April 1874, is brewed in the Rockies for a uniquely crisp, clean, and drinkable "Mile High Taste".',

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
    return queryInterface.bulkDelete("Beers", null, {});
  },
};
