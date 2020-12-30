const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Beer, Brewery, Type,BreweryType,checkin,User } = require('../../db/models');

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
    const breweries = await Brewery.findAll();
    res.json(breweries)
}))

router.get('/:id/beer', asyncHandler(async (req,res) => {
    const beers = await Beer.findAll({brewery:req.params.id});
    res.json(beers)
}))

router.get('/:id/checkins', asyncHandler(async (req,res) => {
    const checkins = await checkin.findAll({where:{breweryId:req.params.id},include:[User,Beer]});
    console.log(checkins)
    res.json(checkins)
}))

router.get('/:id', asyncHandler(async (req,res) => {
    const brewery = await Brewery.findAll({where:{id:req.params.id},include:[BreweryType]});
    res.json(brewery)
}))


// router.post(
//     '/',
//     asyncHandler(async (req, res) => {
//       const { email, password, username } = req.body;
//       const user = await User.signup({ email, username, password });
  
//       await setTokenCookie(res, user);
  
//       return res.json({
//         user,
//       });
//     }),
//   );

module.exports = router;