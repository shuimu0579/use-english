/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */

// 迭代的方式
var maxDepth = function (root) {
  if (!root || root.length) return 0;

  var list = [];

  var queue = [root];
  while (queue.length > 0) {
    var queueLength = queue.length;
    var levelList = [];
    for (var i = 0; i < queueLength; i++) {
      var node = queue.shift();
      levelList.push(node.val);

      for (var child of node.children) {
        queue.push(child);
      }
    }

    list.push(levelList);
  }

  return list.length;
};

// 递归的方式
var maxDepth = function (root) {
  if (!root || root.length === 0) return 0;

  var max = 0;
  for (var i = 0; i < root.children.length; i++) {
    if (root.children[i]) {
      max = Math.max(max, maxDepth(root.children[i]));
    }
  }

  return max + 1;
};

// 这种递归的方式是不行的
var maxDepth = function (root) {
  if (!root || root.length === 0) return 0;

  var nodes = [];
  for (var i = 0; i < root.children.length; i++) {
    if (root.children[i]) {
      nodes.push(root.children[i]);
      maxDepth(root.children[i]);
    }
  }

  return Math.max(...nodes) + 1;
};
