// ```
// 现需要将一根长为正整数 bamboo_len 的竹子砍为若干段，每段长度均为正整数。请返回每段竹子长度的最大乘积是多少。

// https://leetcode.cn/problems/jian-sheng-zi-lcof/description/
// ```;

/**
 * @param {number} bamboo_len
 * @return {number}
 */

// 优先这种解法
// 必须切一刀，1 2 3 特殊处理， n >= 4 的时候，切一刀 一定 大于等于 不切一刀
// for(let j = 1; j <= i; j++)  1<= j < i, 代表一定切了一刀， j === i 代表一刀都没有切。
// 但是通过分析，n >= 4 的时候，切一刀 一定 大于等于 不切一刀. 所以取max的时候,一定是取到了切了一刀的值
// 所以for(let j = 1; j <= i; j++),而不是for(let j = 1; j < i; j++)
/**
 * @param {number} bamboo_len
 * @return {number}
 */
var cuttingBamboo = function (bamboo_len) {
  var n = bamboo_len;
  if (n === 1) return 1;
  if (n === 2) return 1;
  if (n === 3) return 2;

  var dp = new Array(n + 1).fill(0);

  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    // 一定要初始化为0
    var max = 0;
    for (let j = 1; j <= i; j++) {
      // for (let j = 1; j < i; j++) {
      // max = Math.max(max, j * dp[n-j])
      max = Math.max(max, j * dp[i - j]);
    }
    dp[i] = max;
  }

  return dp[n];
};

// 下面这种解法不好理解
var cuttingBamboo = function (bamboo_len) {
  var n = bamboo_len;
  // var dp = new Array(n+1).fill(1);
  var dp = new Array(n + 1).fill(0);

  // dp[0] = 1;
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    // 一定要初始化为0
    var max = 0;
    // for(let j = 1; j <= i; j++){
    for (let j = 1; j < i; j++) {
      // max = Math.max(max, j * dp[n-j])

      // 切割之后不再切割j*(i-j)，切割之后继续切割j * dp[i-j],
      // max = Math.max(max, j * dp[i-j])
      max = Math.max(max, Math.max(j * (i - j), j * dp[i - j]));
    }
    dp[i] = max;
  }

  return dp[n];
};
