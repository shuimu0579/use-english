```
给你两个链表 list1 和 list2 ，它们包含的元素分别为 n 个和 m 个。

请你将 list1 中下标从 a 到 b 的全部节点都删除，并将list2 接在被删除节点的位置。

下图中蓝色边和节点展示了操作后的结果：


请你返回结果链表的头指针。
```;

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  var dummy = new ListNode(-1, list1);
  var prev = dummy;
  var current = list1;

  var left;
  var right;
  var count = 0;
  while (current) {
    if (count < a) {
      prev = prev.next;
    }
    if (count === a) {
      left = prev;
    }
    if (count === b) {
      right = current.next;
    }
    count++;
    current = current.next;
  }

  var current2 = list2;
  // while (current2) {
  while (current2.next) {
    current2 = current2.next;
  }

  left.next = list2;
  current2.next = right;

  return dummy.next;
};
