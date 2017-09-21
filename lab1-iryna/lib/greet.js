'use strict';

module.exports = function(name){
  if (isNaN(name)){
    return 'Hello ' + name;
  }
  else return 'null';
};
