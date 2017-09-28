'use strict';
const arithmetic = require('../lib/arithmetic.js');
const expect = require('expect');
describe('Sum', function() {

  it('should return null when one or both parameters is a NaN', function() {

    let result = arithmetic.sum(1,'s');
    expect(result).toEqual(null);

  });
});

describe('Sum', function(){

  it ('should return 4 when numbers are 1 and 3',function(){
    let result1 = arithmetic.sum(1, 3);
    expect(result1).toEqual(4);
  });

});

describe('Difference', function() {

  it('should return null when one or both parameters is a NaN', function() {

    let result = arithmetic.difference(1,'s');
    expect(result).toEqual(null);


  });
});

describe('difference', function(){

  it ('should return -2  when numbers are 1 and 3',function(){
    let result1 = arithmetic.difference(1, 3);
    expect(result1).toEqual(-2);
  });

});
