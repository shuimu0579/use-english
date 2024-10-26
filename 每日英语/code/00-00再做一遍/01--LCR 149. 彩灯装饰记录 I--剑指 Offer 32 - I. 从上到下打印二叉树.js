/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

```
这段代码的工作原理如下:

首先,我们检查根节点是否为空。如果是,我们直接返回空数组。

我们创建一个result数组来存储最终的结果,每个元素将是一个代表树中一层的数组。

我们创建一个队列queue,初始时只包含根节点。

我们开始一个while循环,只要队列不为空就继续:

  我们获取当前层的节点数量levelSize。

  创建一个数组currentLevel来存储当前层的节点值。
  
  对当前层的每个节点:

    从队列头部取出一个节点。

    将该节点的值添加到currentLevel数组。

    如果该节点有左子节点,将左子节点加入队列。

    如果该节点有右子节点,将右子节点加入队列。
  
  将currentLevel数组添加到result数组。

循环结束后,返回result数组。
```;

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var decorateRecord = function (root) {
  if (!root || root.length === 0) return [];

  var list = [];
  var queue = [root];
  while (queue.length > 0) {
    var index = queue.length;
    var levelList = [];

    for (let i = 0; i < index; i++) {
      // levelList.push(queue[i].val);
      // if(queue[i].left){
      //     queue.push(queue[i].left);
      // }
      // if(queue[i].right){
      //     queue.push(queue[i].right);
      // }
      var node = queue.shift();
      levelList.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    list.push(...levelList);
  }

  return list;
};
