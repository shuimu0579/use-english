// 00--1、有 [2,2,4,6,3,1] 个物品，选择其中一些物品装入背包，在不超过背包最大重量限制 9 的前提下，背包中可装物品总重量的最大值是多少？（最值）
function pack(weight, n, w) {
  var dp = new Array(n).fill().map(() => new Array(w + 1).fill(false));

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

  for (let j = w; j >= 0; j--) {
    if (dp[n - 1][j] === true) {
      return j;
    }
  }
}

var a = pack([2, 2, 4, 6, 3, 1], 6, 9);
console.log(a);
