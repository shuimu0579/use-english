/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  var n = coins.length;
  // var dp = new Array(n).fill().map(() => new Array(amount+1).fill(-1));
  var dp = new Array(n)
    .fill()
    .map(() => new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER));

  let k = amount / coins[0];
  for (let i = 0; i <= k; i++) {
    // dp[0][i * weight[0]] = 1;
    dp[0][i * coins[0]] = i;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= amount; j++) {
      let k = j / coins[i];
      var min = dp[i - 1][j];
      for (let r = 1; r <= k; r++) {
        // min = Math.min(min, dp[i-1][j-r*coins[i]] + r)
        // 这个if判断非常重要，用于剪枝
        if (dp[i - 1][j - r * coins[i]] !== Number.MAX_SAFE_INTEGER) {
          // min = Math.min(min, dp[i - 1][j - r * weight[i]]);
          min = Math.min(min, dp[i - 1][j - r * coins[i]] + r);
        }
      }
      dp[i][j] = min;
    }
  }
  // if(dp[n-1][amount] === -1) return -1;
  if (dp[n - 1][amount] === Number.MAX_SAFE_INTEGER) return -1;

  return dp[n - 1][amount];
};
