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

// Use middleware
app.use(express.logger());
var staticPath = require('path').resolve(__dirname + '/../dist');
app.use(express.static(staticPath));

// Connect to Redis
var redisUrl = process.env.REDISTOGO_URL || 'redis://localhost:6379';
var redis = require('redis-url').connect(redisUrl);

// Routes
app.get('/question', function (req, res) {
  var response;
  var sendResponse = function (status) {
    if (status != null)
      res.status(status);
    res.jsonp(response);
  };

  // Look up question
  redis.hgetall('article:'+req.query.article, function (err, obj) {
    if (err) throw err;

    if (obj == null) {
      response = {error: 'Article ID not found: ' + req.query.article};
      sendResponse(404);
    }
    else {
      response = obj;
      response.articleId = req.query.article;

      if (req.query.user) {
        // Echo back the user ID in the response
        response.userId = req.query.user;

        // Look up this user's vote (key format: "vote:USERID:ARTICLEID")
        redis.hgetall('vote:' + req.query.user + ':' + req.query.article, function (err, obj) {
          if (err) throw err;

          response.vote = obj;
          
          sendResponse();
        });
      }
      else {
        sendResponse();
      }
    }
  });
});

// Start the app
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Listening on ' + port);
});
