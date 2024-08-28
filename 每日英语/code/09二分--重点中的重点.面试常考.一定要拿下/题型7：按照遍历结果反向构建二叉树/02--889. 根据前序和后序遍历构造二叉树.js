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
 * @param {number[]} postorder
 * @return {TreeNode}
 */

// ```
// 这个算法的核心思想是：
// 利用前序遍历的特点（根-左-右）来确定根节点和左子树的根。
// 利用后序遍历的特点（左-右-根）来确定左子树的大小。
// 递归地应用这个过程来构建整个树。
// ```;

var constructFromPrePost = function (preorder, postorder) {
  // 基本情况：如果输入数组为空，返回 null
  if (
    !preorder ||
    preorder.length === 0 ||
    !postorder ||
    postorder.length === 0
  )
    return null;

  // 如果只有一个节点，直接返回该节点
  if (
    preorder.length === 1 &&
    postorder.length === 1 &&
    preorder[0] === postorder[0]
  ) {
    return new TreeNode(preorder[0]);
  }

  // 根节点是前序遍历的第一个元素
  var rootVal = preorder[0];
  var root = new TreeNode(rootVal);

  // 找到左子树的根节点（前序遍历的第二个元素）在后序遍历中的位置
  var currentVal = preorder[1];
  var index = postorder.indexOf(currentVal) + 1;

  // 分割前序和后序遍历数组为左右子树
  var leftPreorder = preorder.slice(1, index + 1);
  var rightPreorder = preorder.slice(index + 1);
  var leftPostorder = postorder.slice(0, index);
  var rightPostorder = postorder.slice(index, postorder.length - 1);

  // 递归构建左右子树
  root.left = constructFromPrePost(leftPreorder, leftPostorder);
  root.right = constructFromPrePost(rightPreorder, rightPostorder);

  return root;
};
