// dp算法

// 这种算法更好
var climbStairs = function (n) {
  var dp = new Array(n + 1).fill(0);

  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

// 这种算法可以
var climbStairs = function (n) {
  var dp = new Array(n).fill(0);

  dp[0] = 1;
  dp[1] = 2;

  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n - 1];
};

// 递归超时
// var climbStairs = function (n) {
//   if (n === 1) return 1;
//   if (n === 2) return 2;

//   return climbStairs(n - 1) + climbStairs(n - 2);
// };
