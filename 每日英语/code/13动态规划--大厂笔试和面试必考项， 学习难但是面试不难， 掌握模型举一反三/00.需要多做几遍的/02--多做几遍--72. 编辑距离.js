```
初始边界条件很重要

// 需要添加这些初始化代码
for (let i = 0; i <= m; i++) {
    dp[i][0] = i;  // 第一列初始化
}
for (let j = 0; j <= n; j++) {
    dp[0][j] = j;  // 第一行初始化
}
```;

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  var m = word1.length;
  var n = word2.length;
  var dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0));

  // for (let i = 0; i <= m; i++) {
  //     dp[i][0] = i;    // 当word2为空时，需要删除word1的i个字符
  // }
  // for (let j = 0; j <= n; j++) {
  //     dp[0][j] = j;    // 当word1为空时，需要插入word2的j个字符
  // }
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i; // 当word2为空时，需要删除word1的i个字符
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j; // 当word1为空时，需要插入word2的j个字符
  }

  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (word1[i - 1] !== word2[j - 1]) {
        // dp[i][j] = Math.min(dp[i-1][j-1], Math.min(dp[i][j-1], [i-1][j])) + 1;
        dp[i][j] =
          Math.min(dp[i - 1][j - 1], Math.min(dp[i][j - 1], dp[i - 1][j])) + 1;
      } else {
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }

  return dp[m][n];
};
