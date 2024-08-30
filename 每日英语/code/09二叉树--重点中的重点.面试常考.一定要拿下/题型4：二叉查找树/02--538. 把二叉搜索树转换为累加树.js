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
 * @return {TreeNode}
 */

// ```
// 这个实现的主要特点：

// 使用反向中序遍历（右-根-左），确保每个节点的新值是其原始值加上所有比它大的节点值的和。
// 直接修改原树，而不是创建新的树节点。这样可以节省内存，提高效率。
// 使用 current 变量来跟踪累加和，避免重复计算。

// 时间复杂度是 O(n)，其中 n 是树中节点的数量，因为每个节点都被访问一次。
// 空间复杂度是 O(h)，其中 h 是树的高度，这是由于递归调用栈的深度。
// ```;

var convertBST = function (root) {
  var current = 0;
  // var treeNode = null;

  function dfs(node) {
    if (!node) return;

    dfs(node.right);

    current = current + node.val;
    // treeNode = new TreeNode(current);
    // treeNode.right = node.right;
    // treeNode.left = node.left;
    node.val = current;

    dfs(node.left);
  }
  dfs(root);

  // return treeNode;
  return root;
};
