/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  var m = obstacleGrid.length;
  var n = obstacleGrid[0].length;
  var dp = new Array(m).fill().map(() => new Array(n).fill(0));

  // 第一列的处理
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0] === 1) {
      var index = i;
      while (index < m) {
        dp[index][0] = 0;
        index++;
      }
    }
  }

  // 第一行的处理
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }
  for (let j = 0; j < n; j++) {
    if (obstacleGrid[0][j] === 1) {
      var index = j;
      while (index < n) {
        dp[0][index] = 0;
        index++;
      }
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // 状态转移公式
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[m - 1][n - 1];
};
