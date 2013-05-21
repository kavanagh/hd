'use strict';

// Initialise app
var express = require('express');
var app = express();

// Add middleware
app.use(express.logger());
var staticPath = require('path').resolve(__dirname + '/../dist');
app.use(express.static(staticPath));

// Set up routes
require('./routes')(app, express);

// Start the app
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Listening on ' + port);
});
