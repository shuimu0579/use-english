/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  var n = nums.length;
  // 特殊情况处理
  if (n <= 3) {
    var max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
      max = Math.max(max, nums[i]);
    }
    return max;
  }

  // 第一间房不偷：那么第二间房可偷可不偷，最后一间房可偷可不偷，其他房间可偷可不偷
  var a = rob_old(nums.slice(1));
  // 第一间房偷： 那么第二间房不能偷，最后一间房也不能偷, 其他房间可偷可不偷
  var b = rob_old(nums.slice(2, nums.length - 1)) + nums[0];

  return Math.max(a, b);
};

var rob_old = function (nums) {
  // 这一行判断非常重要
  // if(nums.length === 0) return 0;

  var m = nums.length;
  var n = 2;
  var dp = new Array(m)
    .fill()
    .map(() => new Array(n).fill(Number.MIN_SAFE_INTEGER));

  dp[0][0] = 0;
  dp[0][1] = nums[0];

  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (j === 0) {
        dp[i][j] = Math.max(dp[i - 1][0], dp[i - 1][1]);
      } else {
        dp[i][j] = dp[i - 1][0] + nums[i];
      }
    }
  }

  return Math.max(dp[m - 1][0], dp[m - 1][1]);
};
