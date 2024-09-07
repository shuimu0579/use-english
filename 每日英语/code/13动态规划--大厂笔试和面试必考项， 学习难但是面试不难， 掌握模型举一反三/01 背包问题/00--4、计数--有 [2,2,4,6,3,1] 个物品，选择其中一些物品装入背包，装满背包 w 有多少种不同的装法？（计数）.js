// 00--4、有 [2,2,4,6,3,1] 个物品，选择其中一些物品装入背包，装满背包 w 有多少种不同的装法？（计数）

// 这种做法是对的
function pack(weight, n, w) {
  var dp = new Array(n).fill().map(() => new Array(w + 1).fill(0));

  dp[0][0] = 1;
  if (weight[0] <= w) {
    dp[0][weight[0]] = 1;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= w; j++) {
      if (j - weight[i] >= 0) {
        dp[i][j] = dp[i - 1][j] + dp[i - 1][j - weight[i]];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[n - 1][w];
}

var a = pack([2, 2, 4, 6, 3, 1], 6, 9);
console.log(a);

// 下面这种方式有三个问题:
// ```
// 初始化错误：对于计数问题，应该初始化为 0 而不是 Number.MIN_VALUE。
// 初始条件设置不正确：应该将 dp[0][0] 设置为 1，因为空集也是一种有效的装法。
// 对于计数问题，我们应该使用加法而不是取最大值。
// ```;
// function pack(weight, n, w) {
//   var dp = new Array(n)
//     .fill()
//     .map(() => new Array(w + 1).fill(Number.MIN_VALUE));

//   dp[0][0] = 0;
//   if (weight[0] <= w) {
//     dp[0][weight[0]] = 1;
//   }

//   for (var i = 1; i < n; i++) {
//     for (var j = 0; j <= w; j++) {
//       if (j - weight[i] >= 0) {
//         dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + 1);
//       } else {
//         dp[i][j] = dp[i - 1][j];
//       }
//     }
//   }

//   return dp[n - 1][w];
// }

// var a = pack([2, 2, 4, 6, 3, 1], 6, 9);
// console.log(a);
