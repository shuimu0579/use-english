/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 获取size
  var node01 = head;
  var size = 0;
  while (node01) {
    size++;
    node01 = node01.next;
  }

  var standNode = new ListNode(null, head);
  var prevNode = standNode;
  var node = head;
  var index = 0;
  if (n > size) {
    return head;
  }
  while (node) {
    if (index === size - n) {
      prevNode.next = node.next;
      break;
    }
    index++;
    prevNode = node;
    node = node.next;
  }

  return standNode.next;
};

var head = { val: 1, next: { val: 2, next: { val: 3, next: null } } };
var a = removeNthFromEnd(head, 1);
console.log("a", a);
