// https://leetcode.cn/problems/unique-paths-ii/description/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  var m = obstacleGrid.length;
  var n = obstacleGrid[obstacleGrid.length - 1].length;
  var dp = new Array(m).fill(null).map(() => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0] === 1) {
      let index = i;
      while (index < m) {
        // dp[i][0] = 0;
        dp[index][0] = 0;
        index++;
      }
    }
  }

  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }
  for (let j = 0; j < n; j++) {
    if (obstacleGrid[0][j] === 1) {
      let index = j;
      while (index < n) {
        // dp[0][j] = 0;
        dp[0][index] = 0;
        index++;
      }
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // if(obstacleGrid[i][j-1] === 1){
      //     dp[i][j] += dp[i-1][j]
      // }else if(obstacleGrid[i-1][j] === 1){
      //     dp[i][j] += dp[i][j-1]
      // }else {
      //     dp[i][j] += dp[i-1][j] + dp[i][j-1]
      // }
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[m - 1][n - 1];
};
