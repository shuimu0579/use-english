/**
 * @param {number} bamboo_len
 * @return {number}
 */
var cuttingBamboo = function (bamboo_len) {
  var n = bamboo_len;
  // var dp = new Array(n+1).fill(1);
  var dp = new Array(n + 1).fill(0);

  // dp[0] = 1;
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    // 一定要初始化为0
    var max = 0;
    // for(let j = 1; j <= i; j++){
    for (let j = 1; j < i; j++) {
      // max = Math.max(max, j * dp[n-j])

      // 切割之后不再切割j*(i-j)，切割之后继续切割j * dp[i-j],
      // max = Math.max(max, j * dp[i-j])
      max = Math.max(max, Math.max(j * (i - j), j * dp[i - j]));
    }
    dp[i] = max;
  }

  return dp[n];
};
