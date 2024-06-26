/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  var heap = [];
  for (let list of lists) {
    // if(list)的判断非常重要，没有这个判断就会报错
    if (list) {
      heap.push(list);
    }
    // heap.push(list);
  }

  var standNode = new ListNode(1, null);
  var prev = standNode;
  while (heap.length) {
    heap.sort((a, b) => a.val - b.val);
    var node = heap.shift();
    prev.next = node;
    prev = node;

    if (node.next) {
      heap.push(node.next);
    }
  }

  return standNode.next;
};
