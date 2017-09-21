'use strict';
const arithmetic = require('../lib/arithmetic.js');
const expect = require('expect');
describe('Sum', function() {

  it('should return 0 when one or both parameters is a NaN', function() {

    let result = arithmetic.sum(1,'s');
    expect(result).toEqual(0);

  });
});
describe('Difference', function() {

  it('should return 0 when one or both parameters is a NaN', function() {

    let result = arithmetic.difference(1,'s');
    expect(result).toEqual(0);
  });
});
