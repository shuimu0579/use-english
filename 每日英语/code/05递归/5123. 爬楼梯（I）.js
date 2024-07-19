/**
 * TLE（超出时间限制）
 * 递归的算法
 */

/**
 * @param {number} n
 * @returns {number}
 */
function climbStairs(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  return climbStairs(n - 1) + climbStairs(n - 2);
}

/**
 * 时间上不会超限
 * 迭代的算法
 */

/**
 * @param {number} n
 * @returns {number}
 */
function climbStairs(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  var prev1 = 1;
  var prev2 = 2;
  var current = 0;

  for (var i = 3; i <= n; i++) {
    current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }

  return current;
}
