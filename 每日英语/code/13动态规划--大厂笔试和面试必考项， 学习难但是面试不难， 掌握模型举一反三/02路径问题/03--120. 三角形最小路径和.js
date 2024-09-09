/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  var m = triangle.length;
  var n = triangle[triangle.length - 1].length;
  var dp = new Array(m)
    .fill()
    .map(() => new Array(n).fill(Number.MAX_SAFE_INTEGER));

  var len = 0;
  for (let i = 0; i < n; i++) {
    dp[0][i] = 0;
  }
  len = 0;
  for (let j = 0; j < m; j++) {
    len += triangle[j][0];
    dp[j][0] = len;
  }

  for (let i = 1; i < m; i++) {
    //for(let j = 1; j < n; j++){
    for (let j = 1; j <= i; j++) {
      if (j === i) {
        dp[i][j] = dp[i - 1][j - 1] + (triangle[i][j] || 0);
      } else {
        dp[i][j] =
          Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + (triangle[i][j] || 0);
      }
      // dp[i][j] = Math.min(dp[i-1][j], dp[i-1][j-1]) + (triangle[i][j] || 0)
    }
  }

  var minNum = Number.MAX_SAFE_INTEGER;
  for (let i = n - 1; i >= 0; i--) {
    minNum = Math.min(minNum, dp[m - 1][i]);
  }
  return minNum;
};
