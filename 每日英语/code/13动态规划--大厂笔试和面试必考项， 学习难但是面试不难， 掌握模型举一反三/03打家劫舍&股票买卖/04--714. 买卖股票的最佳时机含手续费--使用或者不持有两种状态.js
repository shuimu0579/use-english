// 状态定义为： 持有股票、不持有股票
// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    var m = prices.length;
    var n = 2;
    var dp = new Array(m).fill(null).map(() => new Array(n).fill(Number.MIN_SAFE_INTEGER));

    // 0代表不持有， 1 代表持有
    dp[0][0] = 0;
    // dp[0][1] = prices[0];
    dp[0][1] = -prices[0];

    for(let i = 1; i < m; i++){
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i] - fee);
        dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i]);
    }

    return Math.max(dp[m-1][0], dp[m-1][1]);
};

// 下面的状态定义有问题  买 卖 不动， 这样的状态定义有问题
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  var m = prices.length;
  var n = 3;
  var dp = new Array(m)
    .fill()
    .map(() => new Array(n).fill(Number.MIN_SAFE_INTEGER));

  // 0 代表 买； 1 代表 卖； 2代表不动
  dp[0][0] = -prices[0];
  dp[0][1] = 0;
  dp[0][2] = 0;

  dp[1][0] = Math.max(dp[1][1], dp[1][2]);
  dp[1][1] = dp[0][0] + prices[1] - fee;
  dp[1][2] = Math.max(dp[0][0], dp[0][2]);

  for (let i = 2; i < m; i++) {
    dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][2]) - prices[i];
    dp[i][1] = Math.max((dp[i - 1][0], dp[i - 1][2]) + prices[i] - fee);
    dp[i][2] = Math.max(dp[i - 1][0], dp[i - 1][1]);
  }

  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    max = Math.max(max, dp[m - 1][i]);
  }

  return max;
};
