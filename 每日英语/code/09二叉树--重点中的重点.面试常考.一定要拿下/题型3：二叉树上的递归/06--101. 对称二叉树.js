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
 * @return {boolean}
 */

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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;

  function symmetric(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;

    return (
      left.val === right.val &&
      symmetric(left.left, right.right) &&
      symmetric(left.right, right.left)
    );
  }

  return symmetric(root.left, root.right);
};

// 下面的行不通
var isSymmetric = function (root) {
  function symmetric(root) {
    if (!root) return null;

    var leftNode = symmetric(root.left);
    var rightNode = symmetric(root.right);

    return (
      (leftNode === rightNode ||
        (leftNode && rightNode && leftNode.val === rightNode.val)) &&
      (leftNode.left === rightNode.right ||
        (leftNode.left &&
          rightNode.right &&
          leftNode.left.val === rightNode.right.val)) &&
      (leftNode.right === rightNode.left ||
        (leftNode.right &&
          rightNode.left &&
          leftNode.right.val === rightNode.left.val))
    );
  }

  return symmetric(root);
};
