var reactor = reactor || {};

var hostname = null,
    testResult = null;

// uncomment to have an existing vote
/* * /
testResult = {x: 1, y: 1};
/* */

// uncomment to use mockdata;
/* * /
hostname = 'reaction-l.herokuapp.com';
/* */

var mockData = {
  question: {question: 'What is your reaction?',  xTicks: 1, yTicks: 4 }
};

reactor.ReactionService = (function() {

  var createGetRequest = function(path, params) {
    return  $.ajax({
      method: 'GET',
      timeout: 10000,
      dataType: 'jsonp',
      cache: true,
      jsonpCallback: 'get_' + path + '_cb',
      params: params || null,
      url: ['http:/', hostname, path].join('/')
    });
  };

  return {

    getQuestion: function (articleId, userId) {

      if (hostname) {
        return createGetRequest('question', {article: articleId, user: userId});
      }

      var reaction = mockData.question;

      reaction.userId = userId;
      reaction.result = testResult;

      return $.Deferred().resolve(reaction);

    },

    getResults: function(articleId) {
      return $.Deferred().resolve({
        articleId: articleId,
        matrix: [[10, 50, 20, 20]]
      });
    },

    postVote: function(articleId, userId, result) {
      articleId = userId = result;
      return $.Deferred().resolve(true);
    }

  };

}());
