/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root || root.length === 0) return [];

  var list = [];

  var queue = [root];
  while (queue.length > 0) {
    var queueLength = queue.length;
    var levelList = [];
    for (var i = 0; i < queueLength; i++) {
      var node = queue.shift();
      levelList.push(node.val);

      for (var child of node.children) {
        if (child) {
          queue.push(child);
        }
      }
    }

    list.push(levelList);
  }

  return list;
};
