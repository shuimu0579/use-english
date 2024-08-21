/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

```
prev = prev.next这一步很关键。

它确保prev始终指向最后一个不重复的节点。

如果没有这一步,prev可能会停留在早期的节点上,导致后续的删除操作出错。
```;

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes = function (head) {
  if (!head || !head.next) return head;

  var hashMap = new Map();
  var current = head;
  var dummy = new ListNode(null, head);
  var prev = dummy;
  while (current) {
    if (hashMap.has(current.val)) {
      prev.next = current.next;
    } else {
      prev = prev.next; // prev = prev.next; 这一行很关键， 不加上就不行
      hashMap.set(current.val, current);
    }

    current = current.next;
  }

  return dummy.next;
};
