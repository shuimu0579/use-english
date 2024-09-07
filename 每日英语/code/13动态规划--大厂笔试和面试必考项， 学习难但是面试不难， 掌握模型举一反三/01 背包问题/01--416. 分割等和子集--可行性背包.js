// 背包模型--2、有 n 个物品，选择其中一些物品装入背包，能不能正好装满背包？（可行）

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  var sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) return false;

  var w = sum / 2;
  // 这行代码的问题在于,它使所有行都引用了同一个数组对象。这意味着当你修改 dp 的任何一行时,所有行都会被修改。
  // var dp = new Array(nums.length).fill(new Array(w + 1));
  var dp = new Array(nums.length)
    .fill()
    .map(() => new Array(w + 1).fill(false));

  // 初始化
  dp[0][0] = true;
  if (nums[0] <= w) {
    dp[0][nums[0]] = true;
  }

  // 状态转移方程
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j <= w; j++) {
      if (
        dp[i - 1][j] === true ||
        (j - nums[i] >= 0 && dp[i - 1][j - nums[i]] === true)
      ) {
        dp[i][j] = true;
      }
    }
  }

  return dp[nums.length - 1][w];
};

// 下面算法是有问题的
// 逻辑错误:
// 当前算法只检查了单个元素是否等于其他所有元素之和,而没有考虑多个元素组合的情况。这不能正确解决分割子集问题。
// 效率低下:
// 算法的时间复杂度为O(n^2),对于大型数组会非常慢。

// var canPartition = function (nums) {
//   var num2 = [];
//   var isValid = false;
//   for (let i = 0; i < nums.length; i++) {
//     num2 = nums.filter((j) => j !== nums[i]);
//     var sum = num2.reduce((a, b) => a + b, 0);
//     if (nums[i] === sum) {
//       isVaild = true;
//     }
//   }
//   return isValid;
// };
