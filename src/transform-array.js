const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let new_arr= [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i-1] == '--double-next'){
      new_arr.push(arr[i]);
      new_arr.push(arr[i]);
    }
    if (arr[i] == '--double-prev'){
      new_arr.push(arr[i-1]);
    }
    if (arr[i] == '--discard-prev'){
      new_arr = new_arr.slice(0,-1);
    }
    if (arr[i] == '--discard-next'){
    }
    if (arr[i] != '--double-next' || arr[i] != '--double-prev' || arr[i] != '--discard-prev' ||arr[i] != '--discard-next'  || arr[i] !=  undefined){
      new_arr.push(arr[i]);
    }
  }
  return new_arr
}

module.exports = {
  transform
};
