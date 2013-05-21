'use strict';

require('coffee-script');

var dummyData = require('./dummy-data'),
    questions = dummyData.questions;

var redisUrl = process.env.REDISTOGO_URL || 'redis://localhost:6379';
var redis = require('redis-url').connect(redisUrl);

function nextQuestion() {
  var question = questions.pop();
  if (question) {
    // HMSET question:/cms/s/2/8a21debe-944e-11e1-bb47-00144feab49a.html question "What do you think about this?" xTicks 2 yTicks 2 xLabels "Outraged,Overjoyed" yLabels "Stupid,Clever"
    redis.hmset('question:' + question.articleId,
      'question', question.question,
      'xTicks', question.xTicks,
      'yTicks', question.yTicks,
      'xLabels', question.xLabels,
      'yLabels', question.yLabels,
      function (err, result) {
        if (err) throw err;

        if (result !== 'OK')
          throw 'ERROR: result from redis was: ' + result;

        console.log('SAVED QUESTION', question);

        nextQuestion();
      }
    );
  }
}

nextQuestion();
