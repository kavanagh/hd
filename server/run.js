'use strict';

/*
  Planned endpoints:

    GET /question?article=ARTICLE_ID&user=USER_ID
      Returns:
        question
        xTicks
        yTicks

        userId
        result - for this user (if any)
        articleId

    GET /results?article=ARTICLE_ID
      Returns:
        articleId
        results - 2-D array of results (number for each cell in table)

    POST /result
      article = ARTICLE_ID
      user = USER_ID
      result = JSON_RESULT (e.g. {"x":4,"y":1}
*/

var express = require('express');

var app = express();
var staticPath = require('path').resolve(__dirname + '/../dist');

// Load dummy data
require('coffee-script');
var dummyData = require('./dummy');

app.use(express.logger());
app.use(express.static(staticPath));

// Endpoints

app.get('/question', function (req, res) {
  // Look up question

  var response = dummyData.questions[req.query.article];

  if (typeof response !== 'object') {
    response = {
      error: 'No question found for article'
    };
    res.status(404);
  }
  else {
    // Add the article ID
    response.articleId = req.query.article;
    
    // Add this user's response
    // TODO
  }

  res.jsonp(response);
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Listening on ' + port);
});
