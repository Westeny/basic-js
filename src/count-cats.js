const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(data) {
  let cats_count = 0;
  for (let i = 0; i < data.length; i++){
    for (let j = 0; j < data[i].length; j++){
      if (data[i][j] === "^^"){
          cats_count = cats_count + 1;
      }
    }
  }
  return cats_count;

}

module.exports = {
  countCats
};
