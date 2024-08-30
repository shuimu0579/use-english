/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */

// 迭代方式
var preorder = function (root) {
  if (!root || root.length === 0) return [];

  var list = [];
  var stack = [root];
  while (stack.length > 0) {
    var node = stack.pop();

    list.push(node.val);

    // for (var child of node.children) {
    //   stack.push(child);
    // }
    for (var i = node.children.length - 1; i >= 0; i--) {
      stack.push(node.children[i]);
    }
  }

  return list;
};

// 递归方式
var preorder = function (root) {
  var list = [];

  function order(root) {
    if (!root) return;

    list.push(root.val);

    for (var child of root.children) {
      order(child);
    }
  }
  order(root);

  return list;
};
