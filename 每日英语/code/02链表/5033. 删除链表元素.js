function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

// 链接：https://www.codecrush.cn/oj/problem/7

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = val;
 *     this.next = next;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} value
 * @returns {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = val;
 *     this.next = next;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} value
 * @returns {ListNode}
 */
var removeElements = function (head, val) {
  if (!head || !val) return head;

  var standNode = new ListNode(null, head);
  var prev = standNode;
  var node = head;
  while (node) {
    console.log("prev", prev);
    console.log("standNode", standNode);
    if (node.val === val) {
      prev.next = node.next;
    } else {
      // prev.next = node;
      prev = prev.next; // 关键在这里 prev = prev.next  而不是 prev.next = node
    }
    node = node.next;
  }

  return standNode.next;
};

var head01 = {
  val: 1,
  next: { val: 3, next: { val: 1, next: { val: 3, next: null } } },
};
var head = { val: 1, next: head01 };

var a = removeElements(head, 1);
console.log("a", a);
