// 有 [2,2,4,6,3] 个物品，物品的价值为 [3,4,8,9,6] 选择其中一些物品装入背包，在不超过背包最大重量限制 9 的前提下，背包中可装物品总价值的最大值是多少？（最值）
function pack(weight, n, w, value) {
  var dp = new Array(n)
    .fill()
    .map(() => new Array(w + 1).fill(Number.MIN_VALUE));

  dp[0][0] = 0;
  dp[0][weight[0]] = value[0];

  for (var i = 1; i < n; i++) {
    for (var j = 0; j <= w; j++) {
      if (j - weight[i] >= 0) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  for (let j = w; j >= 0; j--) {
    if (dp[n - 1][j] === Number.MIN_VALUE) {
      continue;
    }
    return dp[n - 1][j];
  }
}

var a = pack([2, 2, 4, 6, 3], 5, 9, [3, 4, 8, 9, 6]);
console.log(a);
