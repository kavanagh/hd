var reactor = reactor || {};

$(function() {

  'use strict';

  var targets = '#target1, #target2',
      articleId = location.pathname,
      userId = reactor.UserService.getUserId();

  reactor.ReactionService.getQuestion(articleId, userId).done(function (question) {

    var reaction = new reactor.Reaction(question);

    $(targets).each(function () {
      var target = $(this);

      new reactor.VoteWidget({model: reaction, el: $('<div />').insertAfter(target)[0]}).render();
    });

  });

});
