const express = require('express');
const request = require('request-promise');
const {HOTEL_OFFERS_URL} = require('../common/constants');

const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) =>
{
   res.send('api works');
});

// Get offers
router.get('/offers', (req, res) =>
{
   request(HOTEL_OFFERS_URL)
      .then((body) =>
      {
         // console.log(body);

         res.status(200).json(JSON.parse(body));
      })
      .catch((error) =>
      {
         // console.log(error);

         res.status(500).send(error)
      });
});

module.exports = router;