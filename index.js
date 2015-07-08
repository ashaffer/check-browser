var bowser = require('bowser').browser;

module.exports = function(supports) {
  var listed = false;
  return Object.keys(supports).some(function(name) {
    name = name.toLowerCase();

    if(name !== 'others' && bowser[name]) {
      listed = true;
      return (bowser.version || bowser.osversion) >= supports[name];
    }
  }) || !! (supports.others && ! listed);
};