var reactor = reactor || {};

(function (exports) {
  
  var exports = reactor.ReactionService = {};

  var createGetRequest = function(path, params) {
    var h = reactor.hostname || 'ft-reactor.herokuapp.com';
    return  $.ajax({
      method: 'GET',
      timeout: 10000,
      dataType: 'jsonp',
      cache: true,
      //jsonpCallback: 'get_' + path + '_cb',
      data: params || null,
      url: ['http:/', h, path].join('/')
    });
  };


  exports.getQuestion = function (article, user) {
    if (reactor.hostname) {
      return createGetRequest('question', {article: article, user: user}).pipe(function (data) {
        data.xTicks = parseInt(data.xTicks, 10);
        data.yTicks = parseInt(data.yTicks, 10);
        return data;
      });
    }

    var reaction = window.mockData.question;

    reaction.userId = user;
    reaction.result = testResult;

    return $.Deferred().resolve(reaction);

  };

  exports.getResults = function(article) {

    if (reactor.hostname) {
      return createGetRequest('results', {article: article});
    }

    mockData.results.article = article;

    return $.Deferred().resolve(mockData.results);
  };

  exports.postVote = function(article, user, result) {
    
    if (reactor.hostname) {
      return createGetRequest('setresult', {article: article, user: user, result: !!result ? JSON.stringify(result) : '' });
    }

    return $.Deferred().resolve(true);
  };

}());
