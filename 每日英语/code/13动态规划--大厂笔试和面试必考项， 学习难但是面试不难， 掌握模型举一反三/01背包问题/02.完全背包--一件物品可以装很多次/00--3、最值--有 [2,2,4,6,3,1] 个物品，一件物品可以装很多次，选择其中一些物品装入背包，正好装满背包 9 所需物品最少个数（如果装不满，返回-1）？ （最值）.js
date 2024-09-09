// 00--3、最值--有 [2,2,4,6,3,1] 个物品，一件物品可以装很多次，选择其中一些物品装入背包，正好装满背包 13 所需物品最少个数（如果装不满，返回-1）？ （最值）
function pack(weight, n, w) {
  var dp = new Array(n)
    .fill()
    .map(() => new Array(w + 1).fill(Number.MAX_SAFE_INTEGER));

  var k = w / weight[0];
  dp[0][0] = 0;
  for (let i = 1; i <= k; i++) {
    // dp[0][i * weight[0]] = 1;
    dp[0][i * weight[0]] = i;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= w; j++) {
      let k = j / weight[i];
      // 方式 1
      // var min = dp[i - 1][j];
      // for (let r = 1; r <= k; r++) {
      //   // min = Math.min(min, dp[i-1][j-r*weight[i]] + r)
      //   // 这个if判断非常重要，用于剪枝
      //   if (dp[i - 1][j - r * weight[i]] !== Number.MAX_SAFE_INTEGER) {
      //     // min = Math.min(min, dp[i - 1][j - r * weight[i]]);
      //     min = Math.min(min, dp[i - 1][j - r * weight[i]] + r);
      //   }
      // }

      // 方式 2
      var min = Number.MIN_SAFE_INTEGER;
      for (let r = 0; r <= k; r++) {
        // min = Math.min(min, dp[i-1][j-r*weight[i]] + r)
        // 这个if判断非常重要，用于剪枝
        if (dp[i - 1][j - r * weight[i]] !== Number.MAX_SAFE_INTEGER) {
          // min = Math.min(min, dp[i - 1][j - r * weight[i]]);
          min = Math.min(min, dp[i - 1][j - r * weight[i]] + r);
        }
      }

      dp[i][j] = min;
    }
  }

  return dp[n - 1][w] === Number.MAX_SAFE_INTEGER ? -1 : dp[n - 1][w];
  // return dp[n - 1][w];
}

var a = pack([2, 2, 4, 6, 3, 1], 6, 15); // 3次 6-6-3
console.log(a);
