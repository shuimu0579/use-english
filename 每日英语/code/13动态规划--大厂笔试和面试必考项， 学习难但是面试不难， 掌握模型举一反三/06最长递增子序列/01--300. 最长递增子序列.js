/**
 * @param {number[]} nums
 * @return {number}
 */

// 方式 1
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  var n = nums.length;
  var dp = new Array(n).fill(1);

  dp[0] = 1;
  for (let i = 1; i <= n - 1; i++) {
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

  var count = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i <= n - 1; i++) {
    count = Math.max(count, dp[i]);
  }

  return count;
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
