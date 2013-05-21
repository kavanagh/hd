var reactor = reactor || {};

(function() {

  'use strict';

  var targets = '#target1, #target2',
      article = testArticle || location.pathname,
      user = reactor.UserService.getUserId();

  var createContainerElement = function(target) {
    return $('<div />').insertAfter(target)[0];
  };

  reactor.Reaction.fetchQuestion(article, user).done(function (model) {

      $(function () {
        $(targets).each(function (indx, element) {
          var container = createContainerElement(element);
          new reactor.AppView({model: model, el: container}).render();
        });
      });

  });

}());
