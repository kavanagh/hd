'use strict';

/*
  Planned endpoints:

    GET /question?article=ARTICLE_ID&user=USER_ID
      Returns:
        userId
        result - for this user (if any)
        articleId
        question
        xTicks
        yTicks

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

app.use(express.logger());
app.use(express.static(staticPath));

app.get('/', function(request, response) {
  response.send('Hello World!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Listening on ' + port);
});
