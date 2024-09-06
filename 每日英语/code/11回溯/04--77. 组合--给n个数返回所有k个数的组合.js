/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  var result = [];
  var nums = [];
  for (let i = 1; i <= n; i++) {
    nums.push(i);
  }

  function backTrack(list, count, path) {
    if (count === k) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < list.length; i++) {
      path.push(list[i]);
      // var arr = list.slice(0, i).concat(list.slice(i+1));
      var arr = list.slice(i + 1);

      backTrack(arr, count + 1, path);

      path.pop();
    }
  }
  backTrack(nums, 0, []);

  return result;
};

// 回溯模板
// function combine(n, k) {
//   const result = [];

//   function backtrack(可选列表, 决策阶段, 路径) {
//     // 满足结束条件(所有决策都已完成或得到可行解)
//     if (路径.length === k) {
//       // 路径为可行解
//       result.push([...路径]);
//       return;
//     }

//     for (let 选择 of 可选列表) {
//       // 做选择
//       路径.push(选择);

//       // 更新可选列表,只保留比当前选择大的数
//       const 新可选列表 = 可选列表.filter((num) => num > 选择);

//       // 递归
//       backtrack(新可选列表, 决策阶段 + 1, 路径);

//       // 撤销选择
//       路径.pop();
//     }
//   }

//   // 初始可选列表为1到n的数字
//   const 初始可选列表 = Array.from({ length: n }, (_, i) => i + 1);
//   backtrack(初始可选列表, 0, []);

//   return result;
// }
