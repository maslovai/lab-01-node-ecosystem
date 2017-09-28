'use strict';
let arithmetic = module.exports = {};
arithmetic.sum = function(par1, par2){
  if (isNaN(par1) || isNaN(par2)){
    return null;
  }
  else
  return par1 + par2;
};
arithmetic.difference = function(par1, par2){
  if (isNaN(par1) || isNaN(par2)){
    return null;
  }
  else
  return par1 - par2;
};
