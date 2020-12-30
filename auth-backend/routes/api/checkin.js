const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Op } = require("sequelize");
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Beer, Brewery, Type, checkin, User } = require('../../db/models');

const router = express.Router();

router.get('/:id', asyncHandler(async (req,res) => {
   
  const thisCheckin = await checkin.findAll({where: {id:req.params.id},include: [User,Beer,Brewery]});
  res.json(thisCheckin)
}))

router.post(
    '/',
    asyncHandler(async (req, res) => {
      const { description, pic, rating,beerId } = req.body.data;
      const userId = req.body.data.sessionUser.id
      const beer = await Beer.findByPk(beerId);
      const breweryId = beer.dataValues.brewery
      const checkinData = await checkin.create({userId,breweryId,description,pic,rating:parseInt(rating),beerId:parseInt(beerId)}); 
      // const checkinData = 'hello'
      return res.json({
        checkinData,
      });
    }),
  );

module.exports = router;