/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  var n = coins.length;
  var dp = new Array(n).fill().map(() => new Array(amount + 1).fill(0));

  let k = amount / coins[0];
  for (let i = 0; i <= k; i++) {
    dp[0][i * coins[0]] = 1;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= amount; j++) {
      let k = j / coins[i];
      // var sum = dp[i-1][j];
      // for(let r = 0; r <= k; r++){
      //     if(j - r * coins[i] >= 0){
      //         sum += dp[i-1][j - r * coins[i]];
      //     }
      // }
      var sum = 0;
      for (let r = 0; r <= k; r++) {
        if (j - r * coins[i] >= 0) {
          sum += dp[i - 1][j - r * coins[i]];
        }
      }
      dp[i][j] = sum;
    }
  }

  return dp[n - 1][amount];
};
