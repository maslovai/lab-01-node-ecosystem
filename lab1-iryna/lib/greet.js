'use strict';

module.exports = function(name){
  if (isNaN(name)){
    return 'hello ' + name;
  }
  else return 'null';
};
