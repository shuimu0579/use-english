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

// 迭代的方式
var inorderTraversal = function (root) {
  if (!root || root.length === 0) return [];

  var list = [];

  var stack = [];
  var current = root;
  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    // var peak = stack.pop();
    // list.push(peak.val);
    var current = stack.pop();
    list.push(current.val);

    current = current.right;
  }

  return list;
};

// 递归的方式
var inorderTraversal = function (root) {
  var list = [];

  function traversal(root) {
    if (!root || root.length === 0) return;

    traversal(root.left);
    list.push(root.val);
    traversal(root.right);
  }
  traversal(root);

  return list;
};
