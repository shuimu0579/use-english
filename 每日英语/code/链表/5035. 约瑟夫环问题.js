/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = val;
 *     this.next = next;
 * }
 */

// 链接：https://www.codecrush.cn/oj/problem/9

https: function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

// 成环
function circleList(n) {
  var head = new ListNode(1, null);
  if (n === 1) {
    return head;
  }

  var tail = null;
  var node = head;
  var i = 2;
  while (i <= n) {
    node.next = new ListNode(i, null);
    tail = node.next;

    node = node.next;
    i++;
  }
  tail.next = head;

  return head;
}

/**
 * @param {number} n
 * @param {number} m
 * @returns {number[]}
 */

//环形结构 就不需要 哨兵节点了。
// n = 1的情况、m = 1的情况、环形链表只剩下最后一个子节点的情况 的边界条件要注意
function joseph(n, m) {
  if (n === 1) {
    return [1];
  }

  var head = circleList(n);
  var arr = [];
  var node = head;
  while (node.next !== node) {
    if (m === 1) {
      arr.push(node.val);
      for (var i = 1; i < n; i++) {
        arr.push(i + 1);
        node.next = node.next.next;
        node = node.next;
      }
      return arr;
    } else {
      for (var i = 1; i < m - 1; i++) {
        node = node.next;
      }
      arr.push(node.next.val);
      node.next = node.next.next;
      node = node.next;
    }
  }
  if (node && node.next === node) {
    arr.push(node.val);
  }

  return arr;
}

// var circleList01 = circleList(10);
// console.log("circleList01", circleList01);

var a = joseph(1, 1);
// var a = joseph(10, 1);
// var a = joseph(10, 3);
// var a = joseph(4, 5);
console.log("a", a);
