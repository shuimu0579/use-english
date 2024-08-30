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

// 迭代算法
var postorderTraversal = function (root) {
  if (!root || root.length) return [];

  var list = [];
  var stack1 = [root];
  var stack2 = [];

  while (stack1.length > 0) {
    var node = stack1.pop();
    stack2.push(node);

    if (node.left) {
      stack1.push(node.left);
    }
    if (node.right) {
      stack1.push(node.right);
    }
  }

  while (stack2.length > 0) {
    list.push(stack2.pop().val);
  }

  return list;
};

// 递归算法
var postorderTraversal = function (root) {
  var list = [];

  function traversal(root) {
    if (!root || root.length) return;

    traversal(root.left);
    traversal(root.right);
    list.push(root.val);
  }
  traversal(root);

  return list;
};
