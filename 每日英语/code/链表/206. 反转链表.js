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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  var prevNode = null;
  var node = head;

  if (!node) return head;
  while (node) {
    // 把 node.next 先暂存起来，方便 node = nextTemp 取用
    var nextTemp = node.next;

    node.next = prevNode;
    prevNode = node;

    // node = node.next;
    node = nextTemp;
  }

  return prevNode;
};

var head = { val: 1, next: { val: 2, next: { val: 3, next: null } } };
var a = reverseList(head);
console.log("a", a);
