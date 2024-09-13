// https://leetcode.cn/problems/coin-change/description/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  var m = coins.length;
  var n = amount;
  var dp = new Array(m)
    .fill(null)
    .map(() => new Array(n + 1).fill(Number.MAX_SAFE_INTEGER));

  let k = amount / coins[0];
  for (let i = 0; i <= k; i++) {
    dp[0][i * coins[0]] = i;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 0; j <= n; j++) {
      let k = j / coins[i];
      let min = Number.MAX_SAFE_INTEGER;
      for (let r = 0; r <= k; r++) {
        min = Math.min(min, dp[i - 1][j - r * coins[i]] + r);
      }

      dp[i][j] = min;
    }
  }

  return dp[m - 1][n] !== Number.MAX_SAFE_INTEGER ? dp[m - 1][n] : -1;
};
