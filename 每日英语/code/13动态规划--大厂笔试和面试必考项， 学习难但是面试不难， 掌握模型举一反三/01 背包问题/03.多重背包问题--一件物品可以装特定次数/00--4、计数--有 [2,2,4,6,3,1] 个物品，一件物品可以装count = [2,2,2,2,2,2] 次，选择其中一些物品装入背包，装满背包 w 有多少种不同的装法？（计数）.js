// 00--4、计数--有 [2,2,4,6,3,1] 个物品，一件物品可以装很多次，选择其中一些物品装入背包，装满背包 w 有多少种不同的装法？（计数）

function pack(weight, count, n, w) {
  var dp = new Array(n).fill().map(() => new Array(w + 1).fill(0));

  // let k = w / weight[0];
  let k = Math.min(count[0], w / weight[0]);
  for (let i = 0; i <= k; i++) {
    // dp[0][i] = 1;
    dp[0][i * weight[0]] = 1;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= w; j++) {
      // let k = j / weight[i];
      let k = Math.min(count[i], j / weight[i]);
      var sum = 0;
      for (let r = 0; r <= k; r++) {
        if (j - r * weight[i] >= 0) {
          sum += dp[i - 1][j - r * weight[i]];
        }
      }
      dp[i][j] = sum;
    }
  }

  return dp[n - 1][w];
}

var a = pack([2, 2, 4, 6, 3, 1], [1, 1, 0, 2, 2, 0], 6, 4);
console.log(a);
