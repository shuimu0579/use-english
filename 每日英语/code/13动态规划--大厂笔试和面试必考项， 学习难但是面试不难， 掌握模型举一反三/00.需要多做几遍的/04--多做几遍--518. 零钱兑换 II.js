// 零钱兑换 2  https://leetcode.cn/problems/coin-change-ii/

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  var m = coins.length;
  var n = amount;
  var dp = new Array(m).fill(null).map(() => new Array(n + 1).fill(0));

  var k = n / coins[0];
  for (let i = 0; i <= k; i++) {
    // dp[0][i] = 1;
    dp[0][i * coins[0]] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 0; j <= n; j++) {
      let k = j / coins[i];
      for (let r = 0; r <= k; r++) {
        dp[i][j] += dp[i - 1][j - r * coins[i]];
      }
      // dp[i][j] = dp[i-1][j] + dp[i-1][j-coins[i]]
    }
  }

  return dp[m - 1][n];
};
