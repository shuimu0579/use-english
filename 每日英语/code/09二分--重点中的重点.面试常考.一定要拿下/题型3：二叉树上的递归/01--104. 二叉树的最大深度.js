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

// 迭代的方式--层序遍历
var maxDepth = function (root) {
  if (!root || root.length === 0) return 0;

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

  return list.length;
};

// 递归的方式--
var maxDepth = function (root) {
  if (root === null) return 0;

  // if(root.left){
  //     var maxLeft = maxDepth(root.left)
  // }
  // if(root.right){
  //     var maxRight = maxDepth(root.right)
  // }
  var maxLeft = maxDepth(root.left);
  var maxRight = maxDepth(root.right);

  return Math.max(maxLeft, maxRight) + 1;
};
