// ```
// 最长公共子序列--状态分析和状态转移方程分析

// 如果t1[i] === t2[j], 有三种决策：(i+1, j+1), (i+1, j),(i, j+1)
// 如果t1[i] !== t2[j], 有两种决策：(i+1, j), (i, j+1)
// 到达(i, j)这个状态，也就是说，开始匹配t1[i]和t2[j]了，只有可能从上一个阶段的这几个状态转移过来：
// (i-1,j),(i,j-1),(i-1,j-1)

// 如果原状态是(i-1, j), 那么 i+1, j 不变， 得到(i, j)这个状态
// 如果原状态是(i, j-1), 那么 i 不变, j+1，得到(i, j)这个状态
// 如果原状态是(i-1, j-1) && t1[i-1] === t2[j-1], 那么 i+1, j+1, 得到(i, j)这个状态

// dp[i][j]表示长度为i的t1子串与长度为 j的t2 子串的最长公共子序列长度
// 也就是说，t1[0, i-1]和t2[0, j-1]的最长公共子序列长度
// 也就是说，开始匹配t1[i]和 t2[j]的最长公共子序列长度

// 那么:
// 如果t1[i-1] === t2[j-1], dp[i][j] = Max(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])
// 如果t1[i-1] !== t2[j-1], dp[i][j] = Max(dp[i-1][j], dp[i][j-1]);
// ```;

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  var m = text1.length;
  var n = text2.length;
  var dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    dp[i][0] = 0;
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = 0;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = Math.max(
          dp[i - 1][j - 1] + 1,
          Math.max(dp[i][j - 1], dp[i - 1][j])
        );
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }

  return dp[m][n];
};
