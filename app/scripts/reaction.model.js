var reactor = reactor || {};

reactor.Reaction = Backbone.Model.extend({

  defaults: {
    xTicks: 1,
    yTicks: 1,
    hasVoted: false
  },

  initialize: function() {
    this.set('hasVoted', !!this.get('result'));
    this.set('state', !this.get('result') && !!this.get('userId') ? 'vote' : 'results');
  },

  getMatix: function() {

    var a = this._allAnswers,
        xTicks = this.get('xTicks'),
        yTicks = this.get('yTicks');

    //prepare the matrix for the first time
    //if (!a) {
      a = this._allAnswers = [];
      for (var i = 0; i < xTicks; i +=1) {
        a.push(new Array(yTicks));
      }
    //}

    return a;

    var deferred = this.canVote() ? $.Deferred().resolve(a) : reactor.ReactionService.getResults(this.get('articleId')).pipe(_.bind(function(data) {
      return data; //this._allAnswers = a;
    }, this));

    return deferred;
  },

  canVote: function() {

    var hasVoted = this.get('hasVoted'),
        isKnownUser = !!this.get('userId');

    return !hasVoted && isKnownUser;
  },

  vote: function(x, y) {

    if (!this.canVote()) {
      return;
    }

    var result = {x: x, y: y};

    reactor.ReactionService.postVote(this.get('articleId'), this.get('userId'), result).done(_.bind(function() {
      this.set('result', result);
      this.set('hasVoted', true);
      this.set('state', 'results');
    }, this));
  }

});

reactor.Reaction.fetchQuestion = function (article, user) {
  return reactor.ReactionService.getQuestion(article, user).pipe(function (data) {
    return new reactor.Reaction(data);
  });
}
