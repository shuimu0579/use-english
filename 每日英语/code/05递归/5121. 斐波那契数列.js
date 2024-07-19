/**
 * 时间上不会超限
 * 迭代 for 循环的方式
 */

/**
 * @param {number} n
 * @returns {number}
 */
var fibonacci = function (n) {
  if (n === 1 || n === 2) return 1;

  var prev1 = 1;
  var prev2 = 1;
  var current = 0;

  for (var i = 3; i <= n; i++) {
    var current = (prev1 + prev2) % 1000000007;
    prev1 = prev2;
    prev2 = current;
  }

  return current;
};

/**
 * 会 TLE（超出时间限制）
 * 递归的方式
 */
/**
 * @param {number} n
 * @returns {number}
 */
var fibonacci = function (n) {
  if (n === 1 || n === 2) return 1;

  return (fibonacci(n - 1) + fibonacci(n - 2)) % 1000000007;
};
