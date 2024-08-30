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

```
为什么要检查左子树是否平衡， 检查右子树是否平衡？
if (!checkBalanced(root.left)) return false;
if (!checkBalanced(root.right)) return false;

您提出了一个很好的问题。我为之前的解释不够清晰道歉。让我重新解释一下为什么我们需要检查左子树和右子树是否平衡。
在判断一棵二叉树是否平衡时,我们需要确保以下两个条件都满足:
1. 当前节点的左右子树高度差不超过1。
2.当前节点的左子树和右子树都是平衡的。
只检查当前节点的左右子树高度差是不够的,因为即使当前节点满足高度差的条件,其子树可能是不平衡的。
让我们通过一个例子来说明:
       1
      / \
     2   3
    /     \
   4       5
  /         \
 6           7
在这个树中,根节点1的左右子树高度差是1(左子树高度3,右子树高度2),看起来是平衡的。但是,如果我们只检查根节点,就会错误地认为整棵树是平衡的。实际上,节点2的左子树(4-6)和右子树(空)的高度差为2,因此整棵树是不平衡的。

所以,我们需要递归地检查每个子树是否平衡。这就是为什么在checkBalance函数中,我们首先检查左子树是否平衡,然后检查右子树是否平衡,最后才检查当前节点的左右子树高度差。

```;

var isBalanced = function (root) {
  // 获取子树的高度
  function getHeight(root) {
    if (!root || root.length === 0) return 0;
    return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
  }

  // 根节点数 及 子节点数 的树平衡性校验
  function checkBalanced(root) {
    // if(!root || root.length === 0) return false;
    if (!root || root.length === 0) return true;

    //  子树的平衡性选择？-- 下面这两行代码非常重要！！！
    if (!checkBalanced(root.left)) return false;
    if (!checkBalanced(root.right)) return false;

    var leftHeight = getHeight(root.left);
    var rightHeight = getHeight(root.right);

    return Math.abs(leftHeight - rightHeight) <= 1;
  }

  return checkBalanced(root);
};
