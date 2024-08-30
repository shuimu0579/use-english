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

var invertTree = function (root) {
  // if(!root || root.length === 0) return [];
  if (!root || root.length === 0) return null;

  var node = new TreeNode(root.val);
  node.left = invertTree(root.right);
  node.right = invertTree(root.left);

  return node;
};

// 这样也不行
var invertTree = function (root) {
  if (!root || root.length === 0) return;

  var node = new TreeNode(root.val);
  node.left = invertTree(root.right);
  node.right = invertTree(root.left);

  return node;
};
// 这样是不行的
var invertTree = function (root) {
  if (!root || root.length === 0) return;

  var left = root.left;
  var right = root.right;
  root.left = invertTree(right);
  root.right = invertTree(left);

  return root;
};
