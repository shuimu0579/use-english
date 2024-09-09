// 00--2、有 [2,2,4,6,3,1] 个物品，选择其中一些物品装入背包，能不能正好装满背包 9？（可行）
function pack(weight, n, w) {
  // 创建二维数组
  var dp = new Array(n).fill().map(() => new Array(w + 1).fill(false));

  // 第一行初始化
  dp[0][0] = true;
  if (weight[0] <= w) {
    dp[0][weight[0]] = true;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= w; j++) {
      if (
        dp[i - 1][j] === true ||
        (j - weight[i] >= 0 && dp[i - 1][j - weight[i]] === true)
      ) {
        dp[i][j] = true;
      }
    }
  }

  return dp[n - 1][w];
}

var a = pack([2, 2, 4, 6, 3, 1], 6, 9);
console.log(a);
