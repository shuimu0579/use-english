// https://leetcode.cn/problems/triangle/description/

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  var m = triangle.length;
  var n = triangle[triangle.length - 1].length;
  var dp = new Array(m)
    .fill(null)
    .map(() => new Array(n).fill(Number.MAX_SAFE_INTEGER));

  for (let j = 0; j < n; j++) {
    dp[0][j] = 0;
  }

  var sum = 0;
  for (let i = 0; i < m; i++) {
    sum += triangle[i][0];
    dp[i][0] = sum;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j <= i; j++) {
      if (j === i) {
        dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i][j];
      }
    }
  }

  var min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < m; i++) {
    min = Math.min(min, dp[m - 1][i]);
  }

  return min;
};
