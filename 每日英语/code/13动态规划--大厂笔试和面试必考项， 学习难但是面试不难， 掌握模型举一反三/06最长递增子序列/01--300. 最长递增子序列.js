/**
 * @param {number[]} nums
 * @return {number}
 */

// 方式 1
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  var m = nums.length;
  var dp = new Array(m).fill(Number.MIN_SAFE_INTEGER);

  dp[0] = 1;
  for (let i = 1; i < m; i++) {
    var max = Number.MIN_SAFE_INTEGER;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        max = Math.max(max, dp[j]);
      }
    }
    if (max !== Number.MIN_SAFE_INTEGER) {
      dp[i] = max + 1;
    } else {
      dp[i] = 1;
    }
  }

  // return dp[m-1];
  var max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < m; i++) {
    max = Math.max(max, dp[i]);
  }
  return max;
};

// 方式 2
var lengthOfLIS = function (nums) {
  var n = nums.length;
  var dp = new Array(n).fill(1);

  dp[0] = 1;
  for (let i = 1; i < n; i++) {
    var max = 0;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        max = Math.max(max, dp[j]);
      }
    }
    dp[i] = max + 1;
  }

  var max = 0;
  for (let i = 0; i < n; i++) {
    max = Math.max(max, dp[i]);
  }

  return max;
};
