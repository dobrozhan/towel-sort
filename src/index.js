
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  if (typeof matrix == 'undefined' || matrix == []) {
    return []
  } else {  
    
    let sortedArr = [];

    for (let i = 0; i < matrix.length; i++) {
      if ( i % 2 == 0) {
        for (let j = 0; j < matrix[i].length; j++) {
          sortedArr.push(matrix[i][j]); 
        }
      } else if ( i % 2 == 1) {
        let reversedArr = matrix[i].reverse();
        for (let n = 0; n < reversedArr.length; n++) {
          sortedArr.push(reversedArr[n]); 
        }
      }
    }
    return sortedArr;
  }
}