var reactor = reactor || {};

reactor.VoteWidget = Backbone.View.extend({

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

    self.$el.addClass('reaction-widget');

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

      reactor.ReactionService.getResults(this.model.get('articleId')).done(function(data) {
        dom += _.flatten(data.matrix).join(', ');
        self.$el.html(dom);
      });
    }
  }
});
