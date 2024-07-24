/**
 * 递归的方式， 会栈溢出
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
  if(n === 0) return 1;

  if(n > 0) {
      return x * myPow(x, n - 1);
  }

  if(n < 0) {
      return myPow(x, n + 1) / x;
  }
};


/**
 * 迭代的方式01--如下的方式也超限了
 * 
 */

 var myPow = function(x, n) {
  if(n === 0) return 1;
  if(x === 1) return 1;

  var sum = 1;

  if(n  > 0){
      for(var i = n; i > 0; i--){
          sum = sum * x
      }
  }

  if(n < 0){
      for(var i = n; i < 0; i++){
          sum = sum / x
      }
  }

  return sum;
};


/**
 * 
 * 考虑 n 为 负数的情况
 * 将 n 进行分治，每次计算 n/ 2
 * 使用递归
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
  // 处理 n 为 0 的情况
  if (n === 0) return 1;

  // 处理 n 为负数的情况
  if (n < 0) {
      return 1 / myPow(x, -n);
  }

  // 基本情况
  if (n === 1) return x;

  // 递归情况
  const half = myPow(x, Math.floor(n / 2));
  
  // 如果 n 是偶数
  if (n % 2 === 0) {
      return half * half;
  }
  // 如果 n 是奇数
  else {
      return half * half * x;
  }
};
