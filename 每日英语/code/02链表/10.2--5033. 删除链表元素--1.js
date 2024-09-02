// 链接：https://www.codecrush.cn/oj/problem/7

/**
 * @param {ListNode} head
 * @param {number} value
 * @returns {ListNode}
 */
var removeElements = function (head, val) {
  if (!head || !head.next) return head;

  var dummy = new ListNode(0, head);
  var prev = dummy;
  var current = head;
  while (current) {
    if (current.val === val) {
      prev.next = current.next;
    } else {
      prev = current;
    }

    current = current.next;
  }

  return dummy.next;
};
