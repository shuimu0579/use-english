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
  // var dp = new Array(m).fill().map(() => new Array(n).fill(0));

  // 初始化数据
  // var len = 0;
  // for(let i = 0; i < m; i++){
  //     dp[i][0] += grid[i][0]
  // }
  // len = 0;
  // for(let j = 0; j < n; j++){
  //     dp[0][j] += grid[0][j]
  // }

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

  // 状态转移方程
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j]) + grid[i][j];
    }
  }

  return dp[m - 1][n - 1];
};
