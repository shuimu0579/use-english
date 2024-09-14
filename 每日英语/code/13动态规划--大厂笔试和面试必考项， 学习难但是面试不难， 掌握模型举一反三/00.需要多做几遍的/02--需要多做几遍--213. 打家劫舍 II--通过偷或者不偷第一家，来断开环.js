/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  var n = nums.length;
  // 特殊处理
  if (n === 1) return nums[0];
  if (n === 2) return Math.max(nums[0], nums[1]);
  if (n === 3) return Math.max(nums[0], Math.max(nums[1], nums[2]));

  // 偷第一件房子
  // let a = rob_raw(nums.slice(2, n-1));
  let a = rob_raw(nums.slice(2, n - 1)) + nums[0];
  // 不偷第一间房子
  let b = rob_raw(nums.slice(1));

  return Math.max(a, b);
};

var rob_raw = function (nums) {
  var m = nums.length;
  var n = 2;
  var dp = new Array(m)
    .fill(null)
    .map(() => new Array(n).fill(Number.MIN_SAFE_INTEGER));

  // 0不偷， 1 偷
  dp[0][0] = 0;
  dp[0][1] = nums[0];
  for (let i = 1; i < m; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]);
    dp[i][1] = dp[i - 1][0] + nums[i];
  }

  return Math.max(dp[m - 1][0], dp[m - 1][1]);
};
