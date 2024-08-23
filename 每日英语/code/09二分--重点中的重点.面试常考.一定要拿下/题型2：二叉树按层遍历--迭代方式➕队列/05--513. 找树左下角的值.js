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
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  if (!root || root.length === 0) return [];

  var list = [];

  var queue = [root];
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

    list.push(levelList);
  }

  return list[list.length - 1][0];
};
