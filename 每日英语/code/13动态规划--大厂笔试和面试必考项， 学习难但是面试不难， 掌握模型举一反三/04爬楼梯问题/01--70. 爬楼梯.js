// dp算法

var climbStairs = function(n) {
    if(n === 1) return 1;
    if(n === 2) return 2;

    var dp = new Array(n+1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;

    for(let i = 3; i < n+1; i++){
        dp[i] = dp[i-1] + dp[i-2];
    }

    return dp[n];
};

// 递归超时
// var climbStairs = function (n) {
//   if (n === 1) return 1;
//   if (n === 2) return 2;

//   return climbStairs(n - 1) + climbStairs(n - 2);
// };
