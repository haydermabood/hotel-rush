const express = require('express');
const request = require('request-promise');
const queryString = require('query-string');
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
   const query = queryString.stringify(req.query);
   const targetURL = query ? (HOTEL_OFFERS_URL + '&' + query) : HOTEL_OFFERS_URL;

   request(targetURL)
      .then((body) =>
      {
         res.status(200).json(JSON.parse(body));
      })
      .catch((error) =>
      {
         res.status(500).send(error)
      });
});

module.exports = router;