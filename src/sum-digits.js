const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // let some_num = 0;
  // let x = [];
  // if (n < 10){return n};
  // while (n > 9){
  //   x = String(n).split('')
  //   for ( let i = 0; i <x.length; i++){
  //     some_num +=x[i];
  //   }
  //   n = parseInt(some_num);
  //   some_num = 0;
  // }
  // return n;
}

module.exports = {
  getSumOfDigits
};
