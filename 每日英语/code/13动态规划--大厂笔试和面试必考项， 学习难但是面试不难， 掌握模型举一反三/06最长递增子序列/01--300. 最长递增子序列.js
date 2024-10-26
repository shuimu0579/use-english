```
做题过程中出现了如下三个问题：
https://leetcode.cn/problems/longest-increasing-subsequence/

初始化问题：var dp = new Array(n).fill(Number.MIN_SAFE_INTEGER);
  使用 Number.MIN_SAFE_INTEGER 作为初始值是不合适的
  每个单独的数字至少构成长度为1的递增子序列
  应该将 dp 数组初始化为 1

最大值更新问题：let max = Number.MIN_SAFE_INTEGER;
  当找不到前面比当前数字小的元素时，当前位置的 LIS 长度应该是 1
  使用 Number.MIN_SAFE_INTEGER 会导致 max + 1 得到错误结果

返回值问题：return dp[n-1];
  最长递增子序列不一定以最后一个元素结束
  需要返回 dp 数组中的最大值
```;

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  var n = nums.length;
  // var dp = new Array(n).fill(Number.MIN_SAFE_INTEGER);
  var dp = new Array(n).fill(1);

  dp[0] = 1;

  for (let i = 1; i < n; i++) {
    // let max = Number.MIN_SAFE_INTEGER;
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        max = Math.max(max, dp[j]);
      }
    }
    dp[i] = max + 1;
  }

  // return dp[n-1];
  var max = 0;
  for (let i = 0; i < n; i++) {
    max = Math.max(max, dp[i]);
  }
  return max;
};
