```
初始化：
dp[i][0] 应该初始化为 i，表示将 word1 的前 i 个字符转换为空字符串需要 i 次删除操作。
dp[0][j] 应该初始化为 j，表示将空字符串转换为 word2 的前 j 个字符需要 j 次插入操作。

状态转移方程：
当字符相同时，不需要操作，直接使用前一个状态：dp[i][j] = dp[i-1][j-1]。
当字符不同时，我们选择三种操作中代价最小的一种：
删除：dp[i-1][j] + 1
插入：dp[i][j-1] + 1
替换：dp[i-1][j-1] + 1

返回值：
直接返回 dp[m][n]，它代表将整个 word1 转换为 word2 所需的最少操作数。
```;

// 编辑距离
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  var m = word1.length;
  var n = word2.length;
  // var dp = new Array(m+1).fill().map(() => new Array(n+1).fill(0));
  var dp = new Array(m + 1)
    .fill()
    .map(() => new Array(n + 1).fill(Number.MAX_SAFE_INTEGER));

  for (let i = 0; i <= m; i++) {
    // dp[i][0] = 0;
    dp[i][0] = i;
  }
  for (let j = 0; j <= n; j++) {
    // dp[0][j] = 0;
    dp[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // if(word1[i-1] === word2[j-1]){
      //     dp[i][j] = Math.max(dp[i-1][j-1]+1, Math.max(dp[i][j-1], dp[i-1][j]));
      // }else{
      //     dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j]);
      // }
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i][j - 1] + 1,
          dp[i - 1][j] + 1,
          dp[i - 1][j - 1] + 1
        );
      }
    }
  }

  return dp[m][n];
};

// 这种方式不对 Math.max(m - count, n - count)
// var minDistance = function (word1, word2) {
//   var m = word1.length;
//   var n = word2.length;
//   var dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));

//   for (let i = 0; i <= m; i++) {
//     dp[i][0] = 0;
//   }
//   for (let j = 0; j <= n; j++) {
//     dp[0][j] = 0;
//   }

//   for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (word1[i - 1] === word2[j - 1]) {
//         dp[i][j] = Math.max(
//           dp[i - 1][j - 1] + 1,
//           Math.max(dp[i][j - 1], dp[i - 1][j])
//         );
//       } else {
//         dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
//       }
//     }
//   }

//   var count = dp[m][n];

//   return Math.max(m - count, n - count);
// };
