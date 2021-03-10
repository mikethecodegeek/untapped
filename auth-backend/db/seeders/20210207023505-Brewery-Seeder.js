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
        {
          name: "Ballast Point Brewing Company",
          city: "San Diego",
          state: "CA",
          breweryType: 1,
          description: 'Started in 1996 by a small group of home brewers in San Diego, Ballast Point Brewing Company explores new tastes and techniques to create the perfect balance of taste and aroma. ',
          imgUrl: "https://d2pxm94gkd1wuq.cloudfront.net/BreweryLogos/Standard/87920600.bp.logo.brewing.co.cmyk.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Crazy Mountain Brewing Company",
          city: "Edwards",
          state: "CO",
          breweryType: 1,
          description: 'Crazy Mountain Brewing Company is a Colorado-based brewery with production facilities and Tap Rooms in both Edwards and Denver. Since 2010, Crazy Mountain has grown from a two-person, one-dog operation into one of the largest breweries in Colorado, producing hand-crafted beers of the highest quality that have garnered global attention.',
          imgUrl: "https://d2pxm94gkd1wuq.cloudfront.net/BreweryLogos/Standard/472577990.cmbc.wood.logo.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Deep Ellum Brewing Company",
          city: "Dallas",
          state: "TX",
          breweryType: 1,
          description: 'Based in the legendary blues-born and rock-raised urban district known as Deep Ellum, this trend-setting Dallas brewery creates smooth and assertive craft beers worthy of the area’s eclectic heritage.',
          imgUrl: "https://d2pxm94gkd1wuq.cloudfront.net/BreweryLogos/Standard/94955325.debc-logo.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Diamond Knot Brewery Company",
          city: "Mukilteo",
          state: "WA",
          breweryType: 1,
          description: 'Diamond Knot has been producing handcrafted, beers and distributing them to the greater Puget Sound area from our Mukilteo location since 1994.',
          imgUrl: "https://d2pxm94gkd1wuq.cloudfront.net/BreweryLogos/Standard/30312927.eastbrotherbeercompany.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "East Brother Beer Company",
          city: "Richmond",
          state: "CA",
          breweryType: 1,
          description: 'Diamond Knot has been producing handcrafted, beers and distributing them to the greater Puget Sound area from our Mukilteo location since 1994.',
          imgUrl: "https://d2pxm94gkd1wuq.cloudfront.net/BreweryLogos/Standard/30312927.eastbrotherbeercompany.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Four Peaks Brewing Company",
          city: "Tempe",
          state: "AZ",
          breweryType: 1,
          description: 'Four Peaks Brewery is an Arizona brewery and restaurant. The original and main location is in an old creamery and warehouse on 8th Street in Tempe, Arizona, about 1/2 mile east of the campus of Arizona State University. ',
          imgUrl: "https://d2pxm94gkd1wuq.cloudfront.net/BreweryLogos/Standard/579260060.fourpeaks.transparent.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Genesee Brewing Company",
          city: "Rochester",
          state: "NY",
          breweryType: 1,
          description: 'The Genesee Brewing Company, based in Rochester, New York, is one of the largest and oldest continually operating breweries in the United States. The Brewery makes the Genesee line of beers, including the iconic Genesee Beer, the refreshing Genesee Light, the original Genesee Cream Ale and the Genesee Brew House Pilot Batch series of craft beers.',
          imgUrl: "https://d2pxm94gkd1wuq.cloudfront.net/BreweryLogos/Standard/785924920.gen.brewco.logo2c.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Heineken",
          city: "Amsterdam",
          state: "",
          breweryType: 1,
          description: 'We are a proud, independent and responsible global brewer. Today, HEINEKEN is the number one brewer in Europe and the number two brewer in the world.',
          imgUrl: "https://d2pxm94gkd1wuq.cloudfront.net/BreweryLogos/Standard/58578891.hnv.logo.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Magic Hat Brewing",
          city: "South Burlington",
          state: "VT",
          breweryType: 1,
          description: 'A performance in every bottle. Magic Hat Brewing Co, S. Burlington, VT.',
          imgUrl: "https://d2pxm94gkd1wuq.cloudfront.net/BreweryLogos/Standard/387828332.mht-logo.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pabst Brewing Company",
          city: "San Antonio",
          state: "TX",
          breweryType: 1,
          description: 'With over 30 beers in its portfolio, Pabst Brewing Company is the largest American-owned brewery. Established in 1844, Pabst is known for brewing beers that have become iconic, cherished American brands.',
          imgUrl: "https://d2pxm94gkd1wuq.cloudfront.net/BreweryLogos/Standard/109340255.logo.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Stone Brewing Company",
          city: "Escondido",
          state: "CA",
          breweryType: 1,
          description: 'Founded by Greg Koch and Steve Wagner in 1996, San Diego-based Stone Brewing Co. is the 9th largest craft brewer in the United States. ',
          imgUrl: "https://d2pxm94gkd1wuq.cloudfront.net/BreweryLogos/Standard/8863364.stone-logo.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Angry Orchard Cider Company",
          city: "Boston",
          state: "MA",
          breweryType: 1,
          description: 'The cider makers at Angry Orchard have been experimenting with apple varieties, ingredients and processes to develop hard cider recipes for more than 20 years.',
          imgUrl: "https://d2pxm94gkd1wuq.cloudfront.net/BreweryLogos/Standard/519528535.angry-orchard-logo.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bear Republic",
          city: "Cloverdake",
          state: "CA",
          breweryType: 1,
          description: 'Located in the heart of Wine Country, on the corner of Healdsburg’s historic downtown square, Bear Republic Brewing Company offers award-winning food and world class, handcrafted ales.',
          imgUrl: "https://untappd.akamaized.net/site/brewery_logos/brewery-94_d3c37.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Boston Beer Company",
          city: "Boston",
          state: "MA",
          breweryType: 1,
          description: 'The Boston Beer Company, Inc. (NYSE: SAM) began in 1984 and today brews more than 60 styles of Samuel Adams beer. The company\'s portfolio of brands also includes Angry Orchard Hard Cider, Twisted Tea, and Truly Spiked & Sparkling.',
          imgUrl: "https://d2pxm94gkd1wuq.cloudfront.net/BreweryLogos/Standard/339450994.bostonbeercologo.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Calicraft Brewing Company",
          city: "Walnut Creek",
          state: "CA",
          breweryType: 1,
          description: 'Calicraft Brewing Co. - California, bottled. - Using locally and regionally sourced ingredients Calicraft makes beers that showcase the flavors and taste California.',
          imgUrl: "https://d2pxm94gkd1wuq.cloudfront.net/BreweryLogos/Standard/269232380.calicraftbrewingco.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Capital Brewery Co",
          city: "Middleton",
          state: "WI",
          breweryType: 1,
          description: 'Capital Brewery brewed the first batch of beer, a pilsner, in the spring of 1986 and was founded to brew traditional German style lager beer in America.',
          imgUrl: "https://d2pxm94gkd1wuq.cloudfront.net/BreweryLogos/Standard/425833239.oval.capbelow.color.jpg",
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
