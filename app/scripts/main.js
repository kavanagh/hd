var reactor = reactor || {};

(function() {

  'use strict';

  var targets = window.testSelector || '.railSection:first',
      article = window.testArticle || location.pathname,
      user = reactor.UserService.getUserId();

  var createContainerElement = function(target) {
    return $('<div />').prependTo(target)[0];
  };

  if (!window.testSelector)
    reactor.hostname = 'reaction-c.herokuapp.com';

  reactor.Reaction.fetchQuestion(article, user).done(function (model) {

      $(function () {
        $(targets).each(function (indx, element) {
          var container = createContainerElement(element);
          new reactor.AppView({model: model, el: container}).render();
        });
      });

  });

}());
