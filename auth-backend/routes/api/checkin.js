const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Op } = require("sequelize");
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Beer, Brewery, Type, checkin, User } = require('../../db/models');

const router = express.Router();


router.post(
    '/',
    asyncHandler(async (req, res) => {
      const { description, pic, rating,beerId } = req.body.data;
      const userId = req.body.data.sessionUser.id
      console.log(req.body)
     
  
      const checkinData = await checkin.create({userId,description,pic,rating:parseInt(rating),beerId:parseInt(beerId)}); 
  
      return res.json({
        checkinData,
      });
    }),
  );

module.exports = router;