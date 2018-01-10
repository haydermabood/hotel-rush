//During the test the env variable DEBUG is set to true
process.env.DEBUG = true;

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

chai.should();
chai.use(chaiHttp);

describe('hotel-rush', () =>
{
   describe('api', () =>
   {
      it('/GET offers', (done) =>
      {
          chai.request(server)
            .get('/api/offers')
            .end((err, res) =>
            {
               if(res)
               {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.offers.Hotel.should.be.a('array');
                  res.body.offers.Hotel.length.should.be.gt(0);
               }

               done(err);
            });
      });
   });
});