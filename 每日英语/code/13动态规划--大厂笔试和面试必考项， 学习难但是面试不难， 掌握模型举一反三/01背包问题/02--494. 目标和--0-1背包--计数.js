// 数据偏移 + 0-1背包  的方式

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  var n = nums.length;
  var offset = 1000;
  var m = 2000;

  var dp = new Array(n).fill().map(() => new Array(m + 1).fill(0));
  // dp[0][offset-nums[0]] = 1;
  // dp[0][offset+nums[0]] = 1;
  dp[0][offset + nums[0]] += 1;
  dp[0][offset - nums[0]] += 1;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= m; j++) {
      // if(j-nums[i] >= 0 && j+nums[i] <= m){
      //     dp[i][j] = dp[i-1][j-nums[i]] + dp[i-1][j+nums[i]];
      // }else if(j-nums[i] >= 0){
      //     dp[i][j] = dp[i-1][j-nums[i]]
      // }else if(j+nums[i] <= m){
      //     dp[i][j] = dp[i-1][j+nums[i]];
      // }

      // 方式 1
      // if (j - nums[i] >= 0 && j - nums[i] <= m) {
      //   dp[i][j] = dp[i - 1][j - nums[i]];
      // }
      // if (j + nums[i] >= 0 && j + nums[i] <= m) {
      //   dp[i][j] += dp[i - 1][j + nums[i]];
      // }

      //方式 2
      var sum = 0;
      if (j - nums[i] >= 0 && j - nums[i] <= m) {
        sum += dp[i - 1][j - nums[i]];
      }
      if (j + nums[i] >= 0 && j + nums[i] <= m) {
        sum += dp[i - 1][j + nums[i]];
      }
      dp[i][j] = sum;
    }
  }

  return target + offset <= m && target + offset >= 0
    ? dp[n - 1][target + offset]
    : 0;
};

// 使用 回溯的方式
var findTargetSumWays = function (nums, target) {
  var result = [];
  function backTrack(list, k, count, path) {
    if (k === nums.length) {
      if (count === target) {
        result.push([...path]);
      }
      return;
    }

    // 装+
    path.push(list[k]);
    // backTrack(list.slice(k+1), k+1, count+list[k], path);
    backTrack(list, k + 1, count + list[k], path);
    path.pop();

    // 装-
    path.push(-list[k]);
    // backTrack(list.slice(k+1), k+1, count-list[k], path);
    backTrack(list, k + 1, count - list[k], path);
    path.pop();
  }
  backTrack(nums, 0, 0, []);

  return result.length;
};

// 下面这种方式不能全部通过
// ```
// 问题转化为找到一个子集,其和为 (sum + target) / 2。  这个该怎么理解？   不是求等于target的表达式数目吗？

// 您提出了一个很好的问题。让我来解释一下这个转化的过程和原理。
// 您说得对,我们最终是要求等于 target 的表达式数目。但是,我们可以通过一个巧妙的转化来简化问题。这个转化的理解如下:
// 首先,我们将数组中的数字分为两组:一组前面加 "+",另一组前面加 "-"。
// 设加 "+" 的组为 P,加 "-" 的组为 N。
// 那么我们的目标可以表示为: P - N = target
// 我们知道所有数字的和为 sum,所以: P + N = sum
// 将这两个等式相加: (P - N) + (P + N) = target + sum
// 2P = target + sum
// P = (target + sum) / 2
// 因此,问题转化为:在数组中找出一个子集 P,使得 P 的和等于 (target + sum) / 2
// 这个转化的好处是:
// 我们不再需要考虑 "+" 和 "-" 的组合,只需要考虑选或不选每个数字。
// 问题变成了一个标准的子集和问题,可以用 0-1 背包的思路来解决。
// 举个例子:
// nums = [1, 1, 1, 1, 1], target = 3
// 1. sum = 1 + 1 + 1 + 1 + 1 = 5
// (target + sum) / 2 = (3 + 5) / 2 = 4
// 现在问题变成:在 [1, 1, 1, 1, 1] 中找出和为 4 的子集的数量
// 这个转化不改变问题的本质,但大大简化了解决方案。我们只需要找出和为 4 的子集数量,就等同于找出原问题中等于 3 的表达式数量。
// 这种转化方法是动态规划中常用的技巧,通过改变问题的表述方式,使得问题更容易用已知的算法模型(如 0-1 背包)来解决。

// ```;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  var sum = nums.reduce((a, b) => a + b, 0);

  // 这两个条件重要
  if (Math.abs(target) > sum || (target + sum) % 2 !== 0) return 0;

  var p = (target + sum) / 2;
  var n = nums.length;

  var dp = new Array(n).fill().map(() => new Array(p + 1).fill(0));

  dp[0][0] = 1;
  if (nums[0] <= p) {
    dp[0][nums[0]] = 1;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= p; j++) {
      if (j - nums[i] >= 0) {
        dp[i][j] = dp[i - 1][j] + dp[i - 1][j - nums[i]];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[n - 1][p];
};

// 下面的实现有问题--target 可能为负数
// ```
// 对于计数问题，应该将 dp 数组初始化为 0，而不是 Number.MIN_SAFE_INTEGER。

// j 的范围应该是 0 到 2target，但实际上应该考虑负数的情况。

// 这里直接返回 dp[nums.length -1][target * 2] 是不对的，因为 target 可能是负数。

// ```;
var findTargetSumWays = function (nums, target) {
  var dp = new Array(nums.length)
    .fill()
    .map(() => new Array(target * 2 + 1).fill(Number.MIN_SAFE_INTEGER));

  dp[0][target - nums[0]] = 1;
  dp[0][target + nums[0]] = 1;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j <= target * 2; j++) {
      if (j - nums[i] >= 0 && j + nums[i] <= target * 2) {
        dp[i][j] = dp[i - 1][j - nums[i]] + dp[i - 1][j + nums[i]];
      } else if (j - nums[i] < 0) {
        dp[i][j] = dp[i - 1][j + nums[i]];
      } else if (j + nums[i] > target * 2) {
        dp[i][j] = dp[i - 1][j - nums[i]];
      }
    }
  }

  if (dp[nums.length - 1][target * 2] === Number.MIN_SAFE_INTEGER) return 0;

  return dp[nums.length - 1][target * 2];
};
