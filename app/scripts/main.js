var ReactionService = {

  getQuestion: function (articleId, userId) {
    // Anonymous - with result
    //var reaction = new Reaction({question: 'What is your reaction?', xTicks: 1, yTicks: 4, userId: '', result: {x: 1, y: 10}});

    // Anonymous - without result
    //var reaction = new Reaction({question: 'What is your reaction?', xTicks: 1, yTicks: 4, userId: '');

    // Known - with result
    //var reaction = new Reaction({question: 'What is your reaction?', xTicks: 1, yTicks: 4, userId: userId, result: {x: 1, y: 10}});

    // known without result
    var reaction = {question: 'What is your reaction?',  xTicks: 1, yTicks: 4, userId: userId };

    return $.Deferred().resolve(reaction);

  },

  getResults: function(articleId) {
    return $.Deferred().resolve({
      articleId: articleId,
      matrix: [[10, 50, 20, 20]]
    });
  },

  postVote: function(articleId, userId, result) {
    return $.Deferred().resolve(true);
  }
}

var Reaction = Backbone.Model.extend({
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
    
    ReactionService.postVote(self.get('articleId'), self.get('userId'), result).done(function() {
      self.set('result', result);
      self.set('hasVoted', true);
      self.set('state', 'results');
    });
    
  }

});


var VoteWidget = Backbone.View.extend({

  events: {
    'click .reaction': 'vote'
  },

  initialize: function() {
    this.listenTo(this.model, 'change:state', this.render);
  },

  vote: function (event) {
    var $reaction = $(event.currentTarget);
    var x = $reaction.data('reaction-x');
    var y = $reaction.data('reaction-y');
    var self = this;
    setTimeout(function() {
      self.model.vote(x, y);
    },200);
  },

  render: function() {
    
    var reaction = this.model,
        dom = '<div class="reaction-question">'+ reaction.get('question') + '</div>';

    var m = reaction.getMatix(),
        currentState = reaction.get('state'),
        result = reaction.get('result'),
        userId = reaction.get('userId');

    var self = this;
    var promise = $.ajax();

    if (currentState === 'vote') {

      dom += $.map(m, function (i, e) {
        return '<div class="reaction-axis">' + $.map(i, function(d, j) {
          return '<div class="reaction" data-reaction-x="' +  (e + 1) + '" data-reaction-y="' + (j + 1) + '"></div>';
        }).join('') + '</div>';
      }).join('');
      this.$el.html(dom);

    } else {

      if (!userId) {
        dom += '<p>Login to react!</p>';
      } else {
        dom += '<p>You voted x: ' + result.x + ', y: '+ result.y +'</p>';
      }

      dom += 'Everyone else\'s results: ';
        
      ReactionService.getResults(this.model.get('articleId')).done(function(data) {
        dom += _.flatten(data.matrix).join(', ');
        self.$el.html(dom);
      });
    }
  }
});

$(function() {

  var targets = '#target1, #target2',
      articleId = 'blahblahblah',
      userId = 'reuwiorwuio';

  ReactionService.getQuestion(articleId, userId).done(function (question) {
    var reaction = new Reaction(question);

    $(targets).each(function  () {
      var target = $(this);

      new VoteWidget({model: reaction, el: $('<div class="reaction-widget" />').insertAfter(target)[0]}).render();
    });

  });

});
