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
 * @return {number[][]}
 */
var decorateRecord = function (root) {
  if (!root || root.length === 0) return [];

  var list = [];

  var queue = [root];
  var index = 1;
  while (queue.length > 0) {
    var queueLength = queue.length;
    var levelList = [];

    for (var i = 0; i < queueLength; i++) {
      var node = queue.shift();
      levelList.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    if (index % 2 === 0) {
      levelList = levelList.reverse();
    }

    list.push(levelList);
    index++;
  }

  return list;
};
