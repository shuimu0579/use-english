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
 * @return {TreeNode}
 */

// isValid 用来判断是否找到后继节点，
// 一旦找到后继节点，isValid 就设置为 false, 不再继续寻找
var inorderSuccessor = function (root, p) {
  var result = null;
  var isValid = true;
  function dfs(node) {
    if (!node) return;

    dfs(node.left);
    if (isValid && node.val > p.val) {
      isValid = false;
      result = node;
      // return false;
    }
    dfs(node.right);
  }
  dfs(root);

  return result;
};
