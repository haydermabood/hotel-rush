const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

app.use(cors());
app.use(compression());

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// If an incoming request uses a protocol other than HTTPS,
// redirect that request to the same url but with HTTPS
const forceSSL = function()
{
   return function(req, res, next)
   {
      if(req.headers['x-forwarded-proto'] !== 'https')
      {
         return res.redirect(['https://', req.get('Host'), req.url].join(''));
      }
      next();
   }
};

// Instruct the app to use the forceSSL middleware
if(!process.env.DEBUG)
{
   app.use(forceSSL());
}

// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/dist'));

// Set our api routes
app.use('/api', api);

// For all GET requests, send back index.html so that PathLocationStrategy can be used
app.get('/*', function(req, res)
{
   res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, () =>
{
   console.log(`Application started listening on port ${process.env.PORT || 8080}`);
});

module.exports = app; //for testing