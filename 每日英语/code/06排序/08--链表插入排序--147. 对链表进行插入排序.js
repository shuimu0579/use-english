/**
 * 链表排序的时候, dummy 哨兵节点千万不能 var dummy = new ListNode(0, head);
 * 而是 var dummy = new ListNode(0);
 *
 * 一般对链表的删除操作，就需要在前面添加哨兵节点，比如 dummy = new ListNode(0, head);
 *
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  if (!head || !head.next) return head;

  var dummy = new ListNode(0);
  // var dummy = new ListNode(0, head);
  var prev = dummy;
  var current = head;
  var next = null;

  while (current) {
    next = current.next;

    while (prev.next && prev.next.val < current.val) {
      prev = prev.next;
    }

    current.next = prev.next;
    prev.next = current;

    prev = dummy;
    current = next;
  }

  return dummy.next;
};
