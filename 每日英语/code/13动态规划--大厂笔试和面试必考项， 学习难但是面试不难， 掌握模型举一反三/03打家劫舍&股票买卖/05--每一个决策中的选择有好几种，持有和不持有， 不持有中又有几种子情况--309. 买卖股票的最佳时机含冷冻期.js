// 持有 有一种状态， 不持有 有三种状态 1+3=4

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 1) return 0;

  var m = prices.length;
  var n = 4;
  var dp = new Array(m)
    .fill()
    .map(() => new Array(n).fill(Number.MIN_SAFE_INTEGER));

  // 0 持有
  // 1 不持有(当天卖出)
  // 2 不持有(当天为冷冻期，昨天卖出的)
  // 3 不持有(当天为非冷冻期，昨天也没持有)
  dp[0][0] = -prices[0];
  dp[0][1] = 0;
  dp[0][2] = 0;
  dp[0][3] = 0;

  for (let i = 1; i < m; i++) {
    dp[i][0] = Math.max(
      dp[i - 1][3] - prices[i],
      Math.max(dp[i - 1][2] - prices[i], dp[i - 1][0])
    );
    dp[i][1] = dp[i - 1][0] + prices[i];
    dp[i][2] = dp[i - 1][1];
    dp[i][3] = Math.max(dp[i - 1][2], dp[i - 1][3]);
  }

  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    max = Math.max(max, dp[m - 1][i]);
  }

  return max;
};

// 下面这种解法有误

/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   if (prices.length === 1) return 0;
//   if (prices.length === 2) {
//     if (prices[1] > prices[0]) {
//       return prices[1] - prices[0];
//     } else {
//       return 0;
//     }
//   }

//   var m = prices.length;
//   var n = 2;
//   var dp = new Array(m)
//     .fill()
//     .map(() => new Array(n).fill(Number.MIN_SAFE_INTEGER));

//   // 0 持有 1 不持有
//   dp[0][0] = -prices[0];
//   dp[0][1] = 0;

//   dp[1][0] = Math.max(dp[0][0], dp[0][1] - prices[1]);
//   dp[1][1] = Math.max(dp[0][0] + prices[1], dp[0][1]);

//   for (let i = 2; i < m; i++) {
//     // 关键 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)， 所以
//     dp[i][0] = Math.max(dp[i - 2][1] - prices[1], dp[i - 1][0]);
//     // dp[i][0] = Math.max(dp[i-1][1] - prices[1], dp[i-1][0]);
//     dp[i][1] = Math.max(dp[i - 1][0] + prices[i], dp[i - 1][1]);
//   }

//   let max = Number.MIN_SAFE_INTEGER;
//   for (let i = 0; i < n; i++) {
//     max = Math.max(max, dp[m - 1][i]);
//   }

//   return max;
// };
