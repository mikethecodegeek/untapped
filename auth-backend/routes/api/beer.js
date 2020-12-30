const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Op } = require("sequelize");
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Beer, Brewery, Type, checkin,User } = require('../../db/models');

const router = express.Router();

// const validateSignup = [
//     check('email')
//       .exists({ checkFalsy: true })
//       .isEmail()
//       .withMessage('Please provide a valid email.'),
//     check('username')
//       .exists({ checkFalsy: true })
//       .isLength({ min: 4 })
//       .withMessage('Please provide a username with at least 4 characters.'),
//     check('username')
//       .not()
//       .isEmail()
//       .withMessage('Username cannot be an email.'),
//     check('password')
//       .exists({ checkFalsy: true })
//       .isLength({ min: 6 })
//       .withMessage('Password must be 6 characters or more.'),
//     handleValidationErrors,
//   ];




router.get('/', asyncHandler(async (req,res) => {
    const beers = await Beer.findAll({include: [Brewery,Type]});
    // const beers = ['hello']
    res.json(beers)
}))

router.get('/:id/checkins', asyncHandler(async (req,res) => {
   
    const checkins = await checkin.findAll({where: {beerId: req.params.id},include: User});
    // console.log(checkins.Brewery)
    checkins.forEach(checkin => console.log(checkin.Breweries))
    // const brewers = await Brewery.findAll({where: {name: {[Op.iLike]: `%${req.params.name}%`}}});
    res.json(checkins)
}))

router.get('/search/:name', asyncHandler(async (req,res) => {
    console.log(req.body)
    const beers = await Beer.findAll({where: {name: {[Op.iLike]: `%${req.params.name}%`}},include:[Brewery,Type]});
    const brewers = await Brewery.findAll({where: {name: {[Op.iLike]: `%${req.params.name}%`}},include:[Beer]});
    res.json({beers,brewers})
}))

router.get('/:id', asyncHandler(async (req,res) => {
    const beers = await Beer.findAll({where: {id:req.params.id},include:[Type,Brewery]});
    res.json(beers)
}))




module.exports = router;