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

// 递归方式处理
var isValidBST = function (root) {
  function isValid(node, left = -Infinity, right = Infinity) {
    // 递归的基本情况：如果节点为空，认为是有效的
    if (!node) return true;

    // 检查当前节点的值是否在有效范围内
    if (node.val <= left || node.val >= right) {
      return false;
    }

    // 递归检查左子树和右子树
    return (
      isValid(node.left, left, node.val) && isValid(node.right, node.val, right)
    );
  }

  // 从根节点开始验证
  return isValid(root);
};

// 下面这种方式不行

// ```
// 1、当前的实现只检查了每个节点与其直接子节点的关系，没有考虑到整个子树的值范围。在二叉搜索树中，左子树的所有节点值都应小于根节点，右子树的所有节点值都应大于根节点。
// 2、无法处理特殊情况：
// 例如，对于以下树结构：
//       5
//      / \
//     4   6
//        / \
//       3   7
// 这个算法会错误地认为它是有效的二叉搜索树，但实际上它不是，因为3小于5。

// 3、效率问题：
// 当前算法对每个节点都重复进行检查，时间复杂度为O(n^2)，其中n是节点数量。
// ```;

var isValidBST = function (root) {
  if (!root) return true;

  function isValid(root) {
    if (!root) return true;

    var validLeft = true;
    var validRight = true;
    if (root.left) {
      validLeft = root.val > root.left.val;
    }
    if (root.right) {
      validRight = root.val < root.right.val;
    }

    return validLeft && validRight && isValid(root.left) && isValid(root.right);
  }

  return isValid(root);
};
