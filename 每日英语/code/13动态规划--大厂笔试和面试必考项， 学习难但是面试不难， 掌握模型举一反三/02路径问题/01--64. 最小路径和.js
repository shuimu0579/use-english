/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  var m = grid.length;
  var n = grid[0].length;
  var dp = new Array(m)
    .fill()
    .map(() => new Array(n).fill(Number.MAX_SAFE_INTEGER));

  var len = 0;
  for (let i = 0; i < m; i++) {
    len += grid[i][0];
    dp[i][0] = len;
  }
  len = 0;
  for (let j = 0; j < n; j++) {
    len += grid[0][j];
    dp[0][j] = len;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  return dp[m - 1][n - 1];
};
