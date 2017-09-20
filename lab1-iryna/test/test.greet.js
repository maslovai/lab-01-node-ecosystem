'use strict';
var assert = require('assert');
describe('Greet', function() {

  it('should return null when a passed parameter is not NaN', function() {
    assert.equal('null', (0).greet());
  });

});
