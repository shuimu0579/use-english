/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */

var mergeTrees = function (root1, root2) {
  if (!root1) return root2;
  if (!root2) return root1;

  var node = new TreeNode(root1.val + root2.val);
  node.left = mergeTrees(root1.left, root2.left);
  node.right = mergeTrees(root1.right, root2.right);

  return node;
};

// 下面这种方式有问题
var mergeTrees = function (root1, root2) {
  var list = [];

  function tree(node1, node2) {
    if (!node1 && !node2) return [];

    if (node1 && node2) {
      let val1 = node1.val || 0;
      let val2 = node2.val || 0;

      node1.val = val1 + val2;
      let node = node1;
      list.push(node);

      tree(node1.left, node2.left);
      tree(node1.right, node2.right);
    } else if (node1) {
      let val1 = node1.val;
      let node = node1;
      list.push(node);

      tree(node1.left, null);
      tree(node1.right, null);
    } else if (node2) {
      let val2 = node2.val;

      let node = node2;
      list.push(node);

      tree(null, node2.left);
      tree(null, node2.right);
    }
  }
  tree(root1, root2);

  return list;
};
