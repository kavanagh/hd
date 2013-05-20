var reactor = reactor || {};

var hostname = null,
    testResult = null;

// uncomment to have an existing vote
/* * /
testResult = {x: 1, y: 1};
/* */

// uncomment to use mockdata;
/* * /
hostname = 'localhost:5000'; //reaction-l.herokuapp.com';
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
      data: params || null,
      url: ['http:/', hostname, path].join('/')
    });
  };

  return {

    getQuestion: function (article, user) {
      if (hostname) {
        return createGetRequest('question', {article: article, user: user});
      }

      var reaction = mockData.question;

      reaction.userId = user;
      reaction.result = testResult;

      return $.Deferred().resolve(reaction);

    },

    getResults: function(article) {

      if (hostname) {
        return createGetRequest('results', {article: article});
      }

      return $.Deferred().resolve({
        article: article,
        matrix: [[10, 50, 20, 20]]
      });
    },

    postVote: function(article, user, result) {
      article = user = result;
      return $.Deferred().resolve(true);
    }

  };

}());
