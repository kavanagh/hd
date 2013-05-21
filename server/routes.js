/*
  Endpoints:

    GET /question?article=ARTICLE_ID&user=USER_ID
      Returns:
        question
        xTicks
        yTicks
        xLabels - comma-separated list of labels.
        yLabels - same

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

'use strict';

// Connect to Redis
var redisUrl = process.env.REDISTOGO_URL || 'redis://localhost:6379';
var redis = require('redis-url').connect(redisUrl);

module.exports = function (app, express) {

  // question - for a given article (plus user's response, if user ID specified).
  app.get('/question', function (req, res) {
    var response;

    // Look up question
    var questionKey = 'question:' + req.query.article;
    redis.hgetall(questionKey, function (err, obj) {
      if (err) throw err;

      if (obj == null) {
        response = {error: 'Key not found: ' + questionKey};
        res.jsonp(404, response);
      }
      else {
        response = obj;
        response.articleId = req.query.article;

        if (req.query.user) {
          // Echo back the user ID in the response
          response.userId = req.query.user;

          // Look up this user's vote (key format: "vote:USERID:ARTICLEID")
          redis.get('answer:' + req.query.user + ':' + req.query.article, function (err, obj) {
            if (err) throw err;

            // Add user's vote to the response (even if null), and send it
            response.result = JSON.parse(obj);
            res.jsonp(response);
          });
        }
        else {
          // No user specified; just send the response now
          res.jsonp(response);
        }
      }
    });
  });


  // results - for a given question.
  app.get('/results', function (req, res) {
    var response;

    // Look up results set for article
    redis.hgetall('results:' + req.query.article, function (err, obj) {
      if (err) throw err;

      response = {
        articleId: req.query.article,
        results: obj
      };

      if (obj == null) res.status(404);

      res.jsonp(response);
    });
  });


  // setresult - (create single result for a given article/user combo).
  app.get('/setresult', function (req, res) {
    // Initialise response by echoing the request properties
    var response = {
          articleId: req.query.article,
          userId: req.query.user
        },
        answer;

    // Ensure answer is valid JSON
    try {
      answer = JSON.parse(req.query.result);
    }
    catch (e) {
      response.error = 'Answer must be valid JSON object.';
      res.jsonp(400, response);
      return;
    }

    // Ensure answer has correct properties
    if (typeof answer.x !== 'number' || typeof answer.y !== 'number') {
      response.error = 'Answer must have numeric x and y properties.';
      res.jsonp(400, response);
      return;
    }

    // Create a new answer if it doesn't exist
    redis.setnx('answer:' + req.query.user + ':' + req.query.article, req.query.result, function (err, affected) {
      if (err) throw err;
      console.log('REDIS RESULT', arguments);
      response.affected = affected;

      if (response.affected !== 1) {
        res.error = 'Already got this user\'s answer.';
        res.jsonp(400, response);
        return;
      }

      // Update the resultsX and resultsY things for this article
      var resultsKey = 'results:' + req.query.article;
      var answer = JSON.parse(req.query.result);
      var fieldToIncrement = answer.x + ',' + answer.y;

      redis.hincrby(resultsKey, fieldToIncrement, 1, function (err, outcome) {
        if (err) throw err;

        console.log('hincrby outcome', outcome, resultsKey);

        // Increment vote count on the question
        var questionKey = 'question:' + req.query.article;
        redis.hincrby(questionKey, 'answersCount', 1, function (err, outcome) {
          if (err) throw err;

          console.log('All done.', outcome, questionKey);

          res.jsonp(response);
        });
      });
    });
  });

  
  // adddummydata
  app.get('/setdummydata', function (req, res) {
    require('./task/set-dummy-data');
    res.send('done');
  });

};
