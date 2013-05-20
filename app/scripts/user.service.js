var reactor = reactor || {};

var testUser = null;

// uncomment to have a test user
/* */
testUser = '123456';
/* */

reactor.UserService = (function () {

  var cookieName = 'AYSC',
      ayscCookie = $.cookie(cookieName);

  if (ayscCookie) {
    ayscCookie = ayscCookie.match(/USERID=(\d+)\:/);
  }

  var getUserId = function() {
    return ayscCookie && ayscCookie.length >= 2 ? ayscCookie[0] : null;
  };

  var getUserMockUserId = function() {
    return testUser;
  };

  return {
    setUserId: function(userId) {
      $.cookie(cookieName, 'USERID=' + userId + ':');
    },
    getUserId: (testUser ? getUserMockUserId : getUserId)
  };

}());
