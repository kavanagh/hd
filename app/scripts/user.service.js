var reactor = reactor || {};

(function () {

  var exports = reactor.UserService = {};

  var cookieName = 'FT_User',
      ayscCookie = $.cookie(cookieName);

  if (ayscCookie) {
    ayscCookie = ayscCookie.match(/USERID=(\d+)\:/);
  }

  var getUserId = function() {
    return ayscCookie && ayscCookie.length >= 2 ? ayscCookie[1] : null;
  };

  var getUserMockUserId = function() {
    return window.testUser;
  };

  exports.getUserId = window.testUser ? getUserMockUserId : getUserId;

  exports.setUserId = function(userId) {
    $.cookie(cookieName, 'USERID=' + userId + ':');
  };

}());
