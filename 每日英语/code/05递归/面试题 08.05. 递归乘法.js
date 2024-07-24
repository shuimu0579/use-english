/**
 * https://leetcode.cn/problems/recursive-mulitply-lcci/
 */

/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
 var multiply = function(A, B) {
  if(A === 1) return B;
  if(B === 1) return A;
  if(A === 2 && B === 2) return 4;

  var harfA = Math.floor(A / 2);
  var harfB = Math.floor(B / 2);

  if(A % 2 === 0){
      if(B % 2 === 0){
          return multiply(harfA, harfB) + multiply(harfA, harfB) + multiply(harfA, harfB) + multiply(harfA, harfB)
      }else{
          return multiply(harfA, harfB) + multiply(harfA, harfB) + multiply(harfA, harfB + 1) + multiply(harfA, harfB + 1)
      }
  } else {
      if(B % 2 === 0){
          return multiply(harfA + 1, harfB) + multiply(harfA + 1, harfB) + multiply(harfA, harfB) + multiply(harfA, harfB)
      }else{
          return multiply(harfA + 1, harfB) + multiply(harfA + 1, harfB + 1) + multiply(harfA, harfB) + multiply(harfA, harfB + 1)
      }
  }
};
