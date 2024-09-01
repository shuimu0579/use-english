```
给定单链表的头节点 head ，将所有索引为奇数的节点和索引为偶数的节点分别组合在一起，然后返回重新排序的列表。

第一个节点的索引被认为是 奇数 ， 第二个节点的索引为 偶数 ，以此类推。

请注意，偶数组和奇数组内部的相对顺序应该与输入时保持一致。

你必须在 O(1) 的额外空间复杂度和 O(n) 的时间复杂度下解决这个问题。
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
 * @return {ListNode}
 */

var oddEvenList = function (head) {
  // if(!head && !head.next) return head;
  if (!head || !head.next) return head;

  var oddHead = head;
  var odd = oddHead;
  var evenHead = head.next;
  var even = evenHead;

  while (even && even.next) {
    odd.next = even.next;

    odd = odd.next;
    even.next = odd.next;

    even = even.next;
  }

  odd.next = evenHead;

  return oddHead;
};

// 下面这个关键在于  current.next = null; current = prev.next;
// 当我们将偶数节点移动到另一个链表（evenDummy）时，我们需要确保它与原链表完全断开连接。如果不设置 current.next = null，可能会导致循环引用或不正确的链接。
var oddEvenList = function (head) {
  if (!head || !head.next) return head;

  var dummy = new ListNode(0, head);
  var prev = dummy;
  var evenDummy = new ListNode(0);
  var evenPrev = evenDummy;
  var count = 1;
  var current = head;
  while (current) {
    if (count % 2 === 1) {
      prev = current;
      current = current.next;
    } else {
      // evenPrev.next = current;
      // evenPrev = current;
      // prev.next = current.next;
      // current = current.next;

      // 偶数节点，移动到偶数链表
      evenPrev.next = current;
      prev.next = current.next;
      current.next = null; // 重要！断开与原链表的连接

      evenPrev = current;
      current = prev.next;
    }

    count++;
  }

  var node = head;
  while (node && node.next) {
    node = node.next;
  }
  node.next = evenDummy.next;

  return dummy.next;
};
