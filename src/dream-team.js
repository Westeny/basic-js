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
  let result = [];
  let name = '';
  if ((data !=  null || data != undefined) && data.length != 0){
    for(let i = 0;i < data.length; i++){
      if (typeof data[i] == 'string'){
        result.push(data[i].trim().toUpperCase());
      }
    }
    result = result.sort();
    for (let j = 0; j < result.length; j++){
      name += result[j][0]; 
    }
    return name.toUpperCase();
  }else{
    return false;
  }
}

module.exports = {
  createDreamTeam
};
