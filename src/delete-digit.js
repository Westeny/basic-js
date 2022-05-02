const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let test_int = 0;
  let max_value = 0;
  let deleted_value = [];
  for (let i = 0; i <String(n).length; i++){
    test_int = parseInt(String(n).slice(0,i) + String(n).slice(i+1,)) 
    if(max_value < test_int){
      max_value = test_int
    }
  }
  return max_value
}

module.exports = {
  deleteDigit
};
