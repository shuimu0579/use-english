// 00--3、有 [2,2,4,6,3,1] 个物品，选择其中一些物品装入背包，正好装满背包 9 所需物品最少个数（如果装不满，返回-1）？ （最值）
function pack(weight, n, w) {
  var dp = new Array(n)
    .fill()
    .map(() => new Array(w + 1).fill(Number.MAX_SAFE_INTEGER));

  // 没装就不算物品个数，所以 dp[0][0] = 0
  // dp[0][0] = 1;
  dp[0][0] = 0;
  if (weight[0] <= w) {
    dp[0][weight[0]] = 1;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= w; j++) {
      if (j - weight[i] >= 0) {
        // 0-1在这里体现，`dp[i - 1][j]`代表 0, `dp[i - 1][j - weight[i]] + 1` 代表 1
        // 比较选择和不选择当前物品哪种情况需要的物品数更少
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - weight[i]] + 1);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  // 边界条件
  if (dp[n - 1][w] === Number.MAX_SAFE_INTEGER) {
    return -1;
  }
  return dp[n - 1][w];
}

var a = pack([2, 2, 4, 6, 3, 1], 6, 9);
console.log(a);
