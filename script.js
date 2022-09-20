"use strict";

function maskify(cc) {
  // if (cc.length > 4) {
  //   return cc.slice(-4).padStart(cc.length, "#");
  // } else {
  //   return cc;
  // }
  return cc.length > 4 ? cc.slice(-4).padStart(cc.length, "#") : cc;
}

console.log(maskify("4556364607935616"));
console.log(maskify("Skippy"));
console.log(maskify("Nananananananananananananananana Batman!"));
