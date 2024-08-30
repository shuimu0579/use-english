var lowestCommonAncestor = function (root, p, q) {
  // 如果当前节点为空，返回null
  if (!root) return null;

  // 如果当前节点是p或q之一，返回当前节点
  if (root === p || root === q) return root;

  // 在左子树中递归查找
  var left = lowestCommonAncestor(root.left, p, q);
  // 在右子树中递归查找
  var right = lowestCommonAncestor(root.right, p, q);

  // 如果左右子树都找到了节点，说明当前节点就是LCA
  if (left && right) return root;

  // 返回非空的子树结果，如果都为空则返回null
  return left ? left : right;
};
