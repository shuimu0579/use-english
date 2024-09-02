```
给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。

图示两个链表在节点 c1 开始相交：

题目数据 保证 整个链式结构中不存在环。

注意，函数返回结果后，链表必须 保持其原始结构 。
```;

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  var hashMap = new Map();

  var currentA = headA;
  while (currentA) {
    hashMap.set(currentA, currentA);
    currentA = currentA.next;
  }

  var currentB = headB;
  while (currentB) {
    if (hashMap.has(currentB)) {
      return currentB;
    }
    currentB = currentB.next;
  }

  return null;
};
