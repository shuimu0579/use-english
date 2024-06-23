/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = val;
 *     this.next = next;
 * }
 */

// 链接：https://www.codecrush.cn/oj/problem/8

function ListNode(val, next) {
  this.val = val;
  this.next = next;
}
var LinkedList = function () {
  this.head = new ListNode(null, null);
  this.index = -1;
  this.size = 0;
};

/**
 * @param {number} value
 * @returns null
 */
LinkedList.prototype.add2Tail = function (value) {
  var prev = null;
  var node = this.head;
  while (node) {
    prev = node;
    node = node.next;
  }
  this.index++;
  this.size++;
  prev.next = new ListNode(value, null);
};

/**
 * @param {number} index
 * @param {number} value
 * @returns {boolean}
 */
LinkedList.prototype.add = function (index, value) {};

/**
 * @param {number} index
 * @returns {number}
 */
LinkedList.prototype.remove = function (index) {};

/**
 * @param {number} index
 * @returns {number}
 */
LinkedList.prototype.get = function (index) {};
