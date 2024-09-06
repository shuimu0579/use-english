/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  var result = [];

  function backTrack(list, k, path) {
    if (k === nums.length) {
      result.push([...path]);
      return;
    }

    var hashMap = new Map();
    for (let i = 0; i < list.length; i++) {
      if (hashMap.has(list[i])) {
        continue;
      } else {
        hashMap.set(list[i], 1);
      }

      var num = list[i];
      path.push(num);

      // var arr = list.filter(i => i !== num);
      var arr = [...list.slice(0, i), ...list.slice(i + 1)];
      backTrack(arr, k + 1, path);

      path.pop();
    }
  }
  backTrack(nums, 0, []);

  return result;
};

// 回溯模板

// function permuteUnique(nums) {
//   const result = [];
//   // 首先对数组进行排序,这样相同的数字会相邻
//   nums.sort((a, b) => a - b);

//   function backtrack(可选列表, 决策阶段, 路径) {
//     if (决策阶段 === nums.length) {
//       result.push([...路径]);
//       return;
//     }

//     // 用于跟踪在当前决策阶段已经使用过的数字
//     const used = new Set();

//     for (let i = 0; i < 可选列表.length; i++) {
//       const 选择 = 可选列表[i];

//       // 如果当前数字已经在这个位置使用过,跳过以避免重复
//       if (used.has(选择)) continue;

//       // 做选择
//       路径.push(选择);
//       used.add(选择);
//       const 新可选列表 = [...可选列表.slice(0, i), ...可选列表.slice(i + 1)];

//       // 递归
//       backtrack(新可选列表, 决策阶段 + 1, 路径);

//       // 撤销选择
//       路径.pop();
//     }
//   }

//   backtrack(nums, 0, []);
//   return result;
// }
