'use strict';
const greet = require('../lib/greet.js');
const expect = require('expect');
describe('Greet', function() {

  it('should return null when a passed parameter is not NaN', function() {
    let result = greet(9);
    expect(result).toEqual('null');
  });

});

describe('Greet', function() {

  it('should return hello world when a passed parameter is world', function() {
    let result = greet('world');
    expect(result).toEqual('hello world');
  });

});
