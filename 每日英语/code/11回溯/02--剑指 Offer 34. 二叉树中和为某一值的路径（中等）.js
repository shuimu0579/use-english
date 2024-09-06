/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var pathTarget = function (root, target) {
  var result = [];

  function backTrack(root, k, path) {
    if (!root) return;

    if (!root.left && !root.right && k + root.val === target) {
      result.push([...path, root.val]);
      return;
    }

    path.push(root.val);
    backTrack(root.left, k + root.val, path);
    backTrack(root.right, k + root.val, path);
    path.pop();
  }
  backTrack(root, 0, []);

  return result;
};

// 模板
// function pathSum(root, targetSum) {
//   const result = [];

//   function dfs(node, currentSum, path) {
//     if (!node) return;

//     // 将当前节点加入路径
//     path.push(node.val);
//     currentSum += node.val;

//     // 如果是叶子节点且和等于目标和,将路径加入结果
//     if (!node.left && !node.right && currentSum === targetSum) {
//       result.push([...path]);
//     }

//     // 继续搜索左右子树
//     dfs(node.left, currentSum, path);
//     dfs(node.right, currentSum, path);

//     // 回溯:移除当前节点
//     path.pop();
//   }

//   dfs(root, 0, []);
//   return result;
// }
