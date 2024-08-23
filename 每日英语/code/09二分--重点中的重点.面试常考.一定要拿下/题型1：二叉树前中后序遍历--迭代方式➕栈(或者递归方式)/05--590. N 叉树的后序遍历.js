/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */

// 迭代方式
var postorder = function (root) {
  if (!root || root.length === 0) return [];

  var list = [];

  var stack1 = [root];
  var stack2 = [];
  while (stack1.length > 0) {
    var node = stack1.pop();
    // stack2.push(node.val);
    stack2.push(node);

    // for(var i = node.children.length - 1; i >=0; i--){
    //     stack1.push(node.children[i]);
    // }
    for (var i = 0; i < node.children.length; i++) {
      stack1.push(node.children[i]);
    }
  }
  while (stack2.length > 0) {
    list.push(stack2.pop().val);
  }

  return list;
};

// 递归方式
var postorder = function (root) {
  var list = [];

  function order(root) {
    if (!root || root.length === 0) return;

    for (var child of root.children) {
      order(child);
    }

    list.push(root.val);
  }
  order(root);

  return list;
};
