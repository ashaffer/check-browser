var mock = require('mock-require');
var bowser = {};
mock('bowser', bowser);

var expect = require('chai').expect;
var supports = require('../');

describe('check-browser', function() {
  it('should work', function() {
    bowser.chrome = true;
    bowser.version = 33;
    
    expect(supports({chrome: 33})).to.equal(true);
    
    bowser.version = 32;
    expect(supports({chrome: 33})).to.equal(false);
  });
});