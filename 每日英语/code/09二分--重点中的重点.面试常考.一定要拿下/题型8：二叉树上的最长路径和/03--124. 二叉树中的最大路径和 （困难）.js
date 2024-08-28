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
 * @return {number}
 */

```
3. 子树贡献计算：
计算左右子树的最大贡献，忽略负贡献。
4、局部最大路径更新：
在每个节点更新全局最大路径和。
5、单边最大值返回(返回最大贡献值)：
返回包含当前节点的单边最大路径和给父节点。
```;

var maxPathSum = function (root) {
  // 初始化最大路径和为负无穷，因为路径和可能为负数
  var maxPathSum = -Infinity;

  function dfs(root) {
    // 如果节点为空，返回0
    if (!root) return 0;

    // 递归计算左子树的最大贡献值，如果为负则取0
    var left = Math.max(dfs(root.left), 0);
    // 递归计算右子树的最大贡献值，如果为负则取0
    var right = Math.max(dfs(root.right), 0);

    // 更新最大路径和，考虑包含当前节点的路径
    maxPathSum = Math.max(maxPathSum, root.val + left + right);

    // 返回以当前节点为端点的最大路径和
    return root.val + Math.max(left, right);
  }

  // 从根节点开始深度优先搜索
  dfs(root);

  // 返回整棵树的最大路径和
  return maxPathSum;
};
