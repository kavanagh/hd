var reactor = reactor || {};

(function () {

  var getTweetURL = function(text, url) {
    return 'https://twitter.com/intent/tweet?text=' + escape(text) + '&url=' + escape(url || location.href);
  };

  var getTweetMessage = function(modelJSON) {
    return modelJSON.question;
  };

  reactor.AppView = Backbone.View.extend({

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
      this.model.vote(x, y);
    },

    render: function() {
      console.log('RENDER');
      var m = this.model.getMatix(),
          reaction = this.model.toJSON(),
          dom = '';

      var self = this;

      var containerClass = [
        'reaction-widget',
        'reaction-state-' + reaction.state,
        'reaction-user-' + (!!reaction.userId ? 'known' : 'anonymous')
      ];


      var tweet = '';

      if (reaction.result) {
        tweet = getTweetURL(getTweetMessage(reaction));
      }

      var width = 120, height = 120;

      dom += '<div class="' + containerClass.join(' ') + '">';
      dom += '<div class="reaction-kicker">Reader Reactions:</div>';
      dom += '<div class="reaction-question">' + reaction.question + '</div>';

      dom += '<div class="reaction-controls" style="width:' + width + 'px;height:' + height + 'px;">';
      dom += '<div class="reaction-graph" style="width:' + width + 'px;height:' + height + 'px;">';

      var tooltip = !!reaction.userId ? 'Click to react' : '';

      var blockWidth = width / reaction.yTicks, blockHeight = Math.max(30, height / reaction.xTicks);


      dom += $.map(m, function (i, e) {
          return '<div class="reaction-axis" style="width:' + width + 'px;height:' + blockHeight + 'px">' + $.map(i, function(d, j) {
            return '<div class="reaction usable" style="width:' + blockWidth + 'px;height:' + blockHeight + 'px;line-height:' + blockHeight + 'px;" data-reaction-x="' +  (e + 1) + '" data-reaction-y="' + (j + 1) + '" title="' + tooltip + '"></div>';
          }).join('') + '</div>';
        }).join('');

      dom += '</div>';
      dom += '</div>';


      dom += '<div class="reaction-info">';

      var count = reaction.answersCount || 0;

      dom += '<p class="show-on-anonymous">Login to react!</p>';

      if (count > 10) {
        dom += '<p class="reaction-count">See how you compare to <br/>' + count + ' respondants...</p>';
      }
      
      dom += '<a href="' + tweet + '" target="_blank" class="tweet-reaction">Tweet this</a>';

      dom += '</div>';


      dom += '</div>';

      this.$el.html(dom);

      var partial = '';

      if (reaction.state === 'results') {
        console.log('RENDER resu')

        var reactionNodes = this.$el.find('.reaction');

        reactionNodes.removeClass('usable');

        reactor.ReactionService.getResults(reaction.articleId).done(function(data) {
          var userResultKey = reaction.hasVoted ? reaction.result.x + ',' + reaction.result.y : null;

          _.each(data.results, function(value, key){
            var compositeIndex = key.split(',');
            m[compositeIndex[0] - 1][compositeIndex[1] - 1] = value;
          });

          reactionNodes.each(function (indx, element) {
            var $e = $(element),
                x = $e.data('reaction-x'),
                y = $e.data('reaction-y'),
                isUserAnswer = !!reaction.result && x === reaction.result.x && y === reaction.result.y;
                val = m[x - 1][y - 1] || 0,
                className = 'reaction-result-' + parseInt(Math.min(10, Math.ceil(val / 10)), 10),
                selectedClass = isUserAnswer ? 'selected' : '',
                tooltip = val.toFixed(0) + '% of readers';

            $e.attr('title', tooltip);
            $e.addClass(className + ' ' + selectedClass);
            $e.html(isUserAnswer ? '&#10004;' : '&nbsp;');

          });
        });
      }
    }
  });

}());

