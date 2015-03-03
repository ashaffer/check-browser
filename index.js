var bowser = require('bowser');

module.exports = function(supports) {
  var listed = false;
  return Object.keys(supports).some(function(name) {
    if(name !== 'others' && bowser[name]) {
      listed = true;
      return bowser.version >= supports[name];
    }
  }) || !! (supports.others && ! listed);
};