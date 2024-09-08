// 00--2、可行--有 [2,2,4,6,3,1] 个物品，一件物品可以装很多次，选择其中一些物品装入背包，能不能正好装满背包 9？（可行）
function pack(weight, n, w) {
  var dp = new Array(n).fill().map(() => new Array(w + 1).fill(false));

  let k = w / weight[0];
  for (let i = 0; i <= k; i++) {
    dp[0][i * weight[0]] = true;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= w; j++) {
      let k = j / weight[i];
      for (let r = 0; r <= k; r++) {
        dp[i][j] = dp[i - 1][j - r * weight[i]];
      }
    }
  }

  return dp[n - 1][w];
}

var a = pack([2, 2, 4, 6, 2], 5, 99);
console.log(a);
