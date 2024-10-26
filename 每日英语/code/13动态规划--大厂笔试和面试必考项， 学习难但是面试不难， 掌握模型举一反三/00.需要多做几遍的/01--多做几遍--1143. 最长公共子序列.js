```
// 状态转移方程
if (text1[i-1] === text2[j-1]) {
    dp[i][j] = dp[i-1][j-1] + 1;  // 当前字符相同
} else {
    dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);  // 当前字符不同
}
```;

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  var m = text1.length;
  var n = text2.length;
  var dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0));

  dp[m][0] = 0;
  dp[0][n] = 0;

  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
};
