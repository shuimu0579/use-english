```
给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
```;

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) return head;

  var dummy = new ListNode(0, head);
  var prev = dummy;
  var current = head;
  while (current) {
    if (current.val === val) {
      prev.next = current.next;
      /**
       * Definition for singly-linked list.
       * function ListNode(val, next) {
       *     this.val = (val===undefined ? 0 : val)
       *     this.next = (next===undefined ? null : next)
       * }
       */
      /**
       * @param {ListNode} head
       * @param {number} val
       * @return {ListNode}
       */
      var removeElements = function (head, val) {
        if (!head) return head;

        var dummy = new ListNode(0, head);
        var prev = dummy;
        var current = head;
        while (current) {
          if (current.val === val) {
            prev.next = current.next;
          } else {
            prev = prev.next;
          }
          // prev = prev.next;
          current = current.next;
        }

        return dummy.next;
      };
    }
    prev = prev.next;
    current = current.next;
  }

  return dummy.next;
};
