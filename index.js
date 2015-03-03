var bowser = require('bowser');

module.exports = function(supports) {
  return Object.keys(supports).some(function(browser) {
    var version = supports[browser];
    return bowser[browser] && bowser.version >= version;
  });
};