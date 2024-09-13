// https://leetcode.cn/problems/partition-equal-subset-sum/description/
// 背包模型--2、有 n 个物品，选择其中一些物品装入背包，能不能正好装满背包？（可行）

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  var sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) return false;

  var m = nums.length;
  // var n = sum % 2;
  var n = sum / 2;
  var dp = new Array(m).fill(null).map(() => new Array(n + 1).fill(false));

  dp[0][0] = true;
  if (nums[0] <= n) {
    dp[0][nums[0]] = true;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 0; j <= n; j++) {
      if (
        dp[i - 1][j] === true ||
        (j - nums[i] >= 0 && dp[i - 1][j - nums[i]] === true)
      ) {
        // dp[i][j] === true;
        dp[i][j] = true;
      }
    }
  }

  return dp[m - 1][n];
};
