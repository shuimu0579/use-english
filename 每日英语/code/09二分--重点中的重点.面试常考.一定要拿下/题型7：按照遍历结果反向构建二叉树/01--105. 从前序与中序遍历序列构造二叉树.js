/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// 这个算法巧妙地利用了前序遍历和中序遍历的特性来重建二叉树。前序遍历告诉我们根节点是什么，而中序遍历则帮助我们确定左右子树的范围。

var buildTree = function (preorder, inorder) {
  if (!preorder || preorder.length === 0 || !inorder || inorder.length === 0)
    return null;

  var rootVal = preorder[0];
  var root = new TreeNode(rootVal);

  var rootIndex = inorder.indexOf(rootVal);
  var leftPreorder = preorder.slice(1, 1 + rootIndex);
  var rightPreorder = preorder.slice(1 + rootIndex);
  var leftInorder = inorder.slice(0, rootIndex);
  var rightInorder = inorder.slice(rootIndex + 1);

  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);

  return root;
};
