/**
 * @param {number[][]} frame
 * @return {number}
 */
var jewelleryValue = function (frame) {
  var m = frame.length;
  var n = frame[0].length;
  var dp = new Array(m)
    .fill()
    .map(() => new Array(n).fill(Number.MIN_SAFE_INTEGER));

  var len = 0;
  for (let i = 0; i < m; i++) {
    len += frame[i][0];
    dp[i][0] = len;
  }
  len = 0;
  for (let j = 0; j < n; j++) {
    len += frame[0][j];
    dp[0][j] = len;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + frame[i][j];
    }
  }

  return dp[m - 1][n - 1];
};
