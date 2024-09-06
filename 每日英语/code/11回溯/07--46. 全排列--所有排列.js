/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (nums.length === 1) return [nums];

  var result = [];

  function backTrack(list, count, path) {
    if (count === nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < list.length; i++) {
      var num = list[i];

      path.push(num);
      var remain = list.filter((i) => i !== num);
      backTrack(remain, count + 1, path);
      path.pop();
    }
  }
  backTrack(nums, 0, []);

  return result;
};

// 回溯模板

// function permute(nums) {
//   const result = [];

//   function backtrack(可选列表, 决策阶段, 路径) {
//     if (决策阶段 === nums.length) {
//       result.push([...路径]);
//       return;
//     }

//     for (let i = 0; i < 可选列表.length; i++) {
//       const 选择 = 可选列表[i];
//       // 做选择
//       路径.push(选择);
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
