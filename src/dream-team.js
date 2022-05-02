const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(data) {
  let result_list = [];
  let result = '';
  if (data == null){return false}
  if (data == undefined){return false}
  for (let i = 0; i < data.length; i++){
    if (typeof data[i] == String){
      // data[i].trim();
      result_list.push(data[i][0]);
    }
  }
  result_list.sort();
  for (let j = 0; j < result_list.length; j++){
    result = result + result_list[j][0];
  }
  return result;
}

module.exports = {
  createDreamTeam
};
