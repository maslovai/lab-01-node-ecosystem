'use strict';
var assert = require('assert');
describe('Sum', function() {

  it('should return 0 when one or both parameters is a NaN', function() {
    assert.equal(0, ('a',0).arithmetic.sum());
  });

});
