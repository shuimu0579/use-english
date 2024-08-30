/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  // 如果中序或后序遍历为空，返回null
  if (inorder.length === 0 || postorder.length === 0) return null;

  // 后序遍历的最后一个元素是根节点
  var rootVal = postorder[postorder.length - 1];
  var root = new TreeNode(rootVal);

  // 在中序遍历中找到根节点的位置
  var index = inorder.indexOf(rootVal);

  // 分割中序遍历
  var leftInorder = inorder.slice(0, index);
  var rightInorder = inorder.slice(index + 1);

  // 分割后序遍历
  var leftPostorder = postorder.slice(0, index);
  var rightPostorder = postorder.slice(index, postorder.length - 1);

  // 递归构建左子树和右子树
  root.left = buildTree(leftInorder, leftPostorder);
  root.right = buildTree(rightInorder, rightPostorder);

  return root;
};
