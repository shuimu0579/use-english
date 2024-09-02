```
LCR 078. 合并 K 个升序链表

给定一个链表数组，每个链表都已经按升序排列。

请将所有链表合并到一个升序链表中，返回合并后的链表。

输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
解释：链表数组如下：
[
  1->4->5,
  1->3->4,
  2->6
]
将它们合并到一个有序链表中得到。
1->1->2->3->4->4->5->6
```;

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  // if(lists.length === 0) return lists;
  if (lists.length === 0) return null;

  var heap = [];
  for (var list of lists) {
    if (list) {
      // list 为 null 的判断非常重要，没有这个判断就会报错
      heap.push(list);
    }
  }

  var dummy = new ListNode(0);
  var prev = dummy;
  while (heap.length > 0) {
    // heap = heap.sort((a, b) => a.val < b.val);
    heap = heap.sort((a, b) => a.val - b.val);
    var node = heap.shift();
    prev.next = node;
    prev = prev.next;

    if (node.next) {
      heap.push(node.next);
    }
  }

  return dummy.next;
};
