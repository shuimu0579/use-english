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
 * @return {number[]}
 */

// 迭代的方式--使用栈
var preorderTraversal = function (root) {
  if (!root || root.length === 0) return [];

  var list = [];
  var stack = [root];
  while (stack.length > 0) {
    var peak = stack.pop();
    list.push(peak.val);

    if (peak.right) {
      stack.push(peak.right);
    }
    if (peak.left) {
      stack.push(peak.left);
    }
  }

  return list;
};

// 递归的方式
var preorderTraversal = function (root) {
  var list = [];

  function traversal(root) {
    if (!root) return null;

    list.push(root.val);
    traversal(root.left);
    traversal(root.right);
  }
  traversal(root);

  return list;
};
