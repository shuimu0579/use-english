// 00--1、选择其中一些物品[2, 2, 4, 6, 3, 1]装入背包，一件物品可以装很多次， 在不超过背包最大重量限制 9 的前提下，背包中可装物品总重量的最大值是多少？（最值）
function pack(weight, n, w) {
  var dp = new Array(n).fill().map(() => new Array(w + 1).fill(false));

  let k = w / weight[0];
  // for (let i = 0; i < k; i++) {
  for (let i = 0; i <= k; i++) {
    // dp[0][k * weight[0]] = true;
    dp[0][i * weight[0]] = true;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= w; j++) {
      let k = j / weight[i];
      // for (let r = 0; r < k; r++) {
      for (let r = 0; r <= k; r++) {
        if (j - r * weight[i] >= 0 && dp[i - 1][j - r * weight[i]] === true) {
          dp[i][j] = true;
          break;
        }
      }
    }
  }
  console.log("dp", dp);
  for (let i = w; i >= 0; i--) {
    if (dp[n - 1][i] === true) {
      return i;
    }
  }
}

var a = pack([2, 2, 4, 6, 3, 1], 6, 9);
console.log(a);
