const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(data) {
  let count = 0;
  for( let i = 0; i <data.length; i++){
    for( let j = 0; j<data[i].length; j++){
      count+=j;
    }
  }
  return count
}

module.exports = {
  getMatrixElementsSum
};
