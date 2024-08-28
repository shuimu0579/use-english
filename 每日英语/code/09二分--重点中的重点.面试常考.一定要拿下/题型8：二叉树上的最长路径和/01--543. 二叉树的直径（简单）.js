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

// 算法思路: 二叉树直径 = 左子树深度 + 右子树深度

var diameterOfBinaryTree = function (root) {
  // 如果根节点为空，直径为0
  if (!root) return 0;

  // 用于存储最大直径
  var maxLength = 0;

  function dfs(node) {
    // 如果当前节点为空，返回0
    if (!node) return 0;

    // 递归计算左子树的深度
    var left = dfs(node.left);
    // 递归计算右子树的深度
    var right = dfs(node.right);

    // 更新最大直径：左子树深度 + 右子树深度
    maxLength = Math.max(maxLength, left + right);

    // 返回当前节点为根的子树的最大深度
    return Math.max(left, right) + 1;
  }

  // 从根节点开始深度优先搜索
  dfs(root);

  // 返回最大直径
  return maxLength;
};
