var reactor = reactor || {};

$(function() {

  'use strict';

  var targets = '#target1, #target2',
      article = 'foobar' || location.pathname,
      user = reactor.UserService.getUserId();
console.log(article, user);
  reactor.ReactionService.getQuestion(article, user).done(function (question) {

    var reaction = new reactor.Reaction(question);

    $(targets).each(function () {
      var target = $(this);

      new reactor.VoteWidget({model: reaction, el: $('<div />').insertAfter(target)[0]}).render();
    });

  });

});
