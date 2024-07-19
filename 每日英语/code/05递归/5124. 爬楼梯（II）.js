/**
 * 时间上不会超限
 * 迭代的算法
 */

/**
 * @param {number} n
 * @returns {number}
 */
var climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (n === 3) return 4;

  var prev1 = 1;
  var prev2 = 2;
  var prev3 = 4;
  var current = 0;

  for (var i = 4; i <= n; i++) {
    current = (prev1 + prev2 + prev3) % 1000000007;

    prev1 = prev2;
    prev2 = prev3;
    prev3 = current;
  }

  return current;
};
