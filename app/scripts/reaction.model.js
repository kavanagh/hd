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

    var a = [], xt = this.get('xTicks'), yt = this.get('yTicks');

    for (var i = 0; i < xt; i +=1) {
      a.push(new Array(yt));
    }

    return a;
  },

  vote: function(x, y) {
    if (this.get('hasVoted') || !this.get('userId')) {
      return;
    }

    var result = {x: x, y: y};
    var self = this;

    reactor.ReactionService.postVote(self.get('articleId'), self.get('userId'), result).done(function() {
      self.set('result', result);
      self.set('hasVoted', true);
      self.set('state', 'results');
    });

  }

});
