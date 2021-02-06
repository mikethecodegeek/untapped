const express = require("express");
const asyncHandler = require("express-async-handler");
const { Op } = require("sequelize");

const {
  Beer,
  Brewery,
  Type,
  checkin,
  User,
  BreweryType,
} = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const beers = await Beer.findAll({ include: [Brewery, Type] });

    res.json(beers);
  })
);

router.get(
  "/:id/checkins",
  asyncHandler(async (req, res) => {
    const checkins = await checkin.findAll({
      where: { beerId: req.params.id },
      include: User,
    });
    res.json(checkins);
  })
);

router.get(
  "/search/:name",
  asyncHandler(async (req, res) => {
    // Get all beers that match search terms
    const someBeers = await Beer.findAll({
      where: { name: { [Op.iLike]: `%${req.params.name}%` } },
      include: [Brewery, Type],
    });

    // Get all breweries that match search terms
    const brewers = await Brewery.findAll({
      where: { name: { [Op.iLike]: `%${req.params.name}%` } },
      include: [Beer, BreweryType],
    });

    // This code uses the results from the Breweries table to find all beers
    // from a specific brewery even though they don't match the search terms

    let beersFromBrewery = [];

    // Make sure we actually have some data to work with
    if (brewers[0]) {

      // Get the brewery id from the search results
      const brewId = brewers[0].dataValues.id;

      // Get all beers from the brewery
      beersFromBrewery = await Beer.findAll({
        where: { brewery: brewId },
        include: [Brewery, Type],
      });
    }

    // Create an array full of beer ids
    const someBeersIds = someBeers.map((beer) => beer.dataValues.id);

    // Filter out the beers that we already got from the first DB call
    const moreBeers = beersFromBrewery.filter(
      (beer) => !someBeersIds.includes(beer.dataValues.id)
    );

    // Create an array full of unique beers from both the first and second DB call
    let beers = [...someBeers, ...moreBeers];

    res.json({ beers, brewers });
  })
);

router.get(
  "/homebeers",
  asyncHandler(async (req, res) => {
    const beers = await Beer.findAll({ limit: 20 });
    res.json(beers);
  })
);
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const beers = await Beer.findAll({
      where: { id: req.params.id },
      include: [Type, Brewery],
    });
    res.json(beers);
  })
);

module.exports = router;
