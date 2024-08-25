/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 基本情况：如果当前节点为空，返回null
  if (root === null) return null;

  // 如果当前节点是p或q中的一个，直接返回该节点
  // 这处理了p或q本身就是LCA的情况
  if (root === p || root === q) return root;

  // 递归搜索左子树
  var left = lowestCommonAncestor(root.left, p, q);

  // 递归搜索右子树
  var right = lowestCommonAncestor(root.right, p, q);

  // 如果左右子树都找到了结果，说明p和q分别在当前节点的左右子树中
  // 因此当前节点就是LCA
  if (left && right) return root;

  // 如果左子树找到了结果，返回左子树的结果
  // 如果右子树找到了结果，返回右子树的结果
  // 如果都没找到，这里会返回null
  return left ? left : right;
};
