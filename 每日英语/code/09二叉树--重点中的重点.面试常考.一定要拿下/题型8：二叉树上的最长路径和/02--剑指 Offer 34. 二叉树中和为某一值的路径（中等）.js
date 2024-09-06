// ## 回溯代码模板

// ```
// result = []
// def backtrack(可选列表, 决策阶段, 路径):
//     if 满足结束条件(所有决策都已完成或得到可行解):
//         if路径为可行解：result.add(路径)
//         return

//     for 选择 in [可选列表]:
//         # 做选择
//         路径.add(选择)
//         backtrack(可选列表, 决策阶段, 路径)
//         # 撤销选择
// ```

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
  var list = []; // 存储所有符合条件的路径

  // root 可选列表, count 决策阶段, path 路径

  function dfs(root, count, path) {
    if (!root) return; // 如果节点为空，直接返回

    count = count + root.val; // 更新当前路径和
    path.push(root.val); // 将当前节点值加入路径

    // 如果是叶子节点且路径和等于目标值，将当前路径加入结果列表
    if (!root.left && !root.right && count === target) {
      // list.push(path);
      list.push([...path]); // 使用浅拷贝避免后续修改影响已保存的路径
    }

    dfs(root.left, count, path); // 递归遍历左子树
    dfs(root.right, count, path); // 递归遍历右子树

    path.pop(); // 回溯，移除当前节点
  }

  dfs(root, 0, []); // 从根节点开始深度优先搜索

  return list; // 返回所有符合条件的路径
};
