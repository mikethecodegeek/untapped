const express = require('express');
const asyncHandler = require('express-async-handler');

const { Beer, Brewery, Type,BreweryType,checkin,User } = require('../../db/models');

const router = express.Router();


router.get(
    "/homebreweries",
    asyncHandler(async (req, res) => {
      const beers = await Brewery.findAll({ limit: 6 });
      res.json(beers);
    })
  );

router.get('/', asyncHandler(async (req,res) => {
    const breweries = await Brewery.findAll();
    res.json(breweries)
}))

router.get('/:id/beer', asyncHandler(async (req,res) => {
    const beers = await Beer.findAll({brewery:req.params.id});
    res.json(beers)
}))

router.get('/:id/checkins', asyncHandler(async (req,res) => {
    const checkins = await checkin.findAll({where:{breweryId:req.params.id},include:[User,Beer]});
    res.json(checkins)
}))

router.get('/:id', asyncHandler(async (req,res) => {
    const brewery = await Brewery.findAll({where:{id:req.params.id},include:[BreweryType]});
    res.json(brewery)
}))


module.exports = router;