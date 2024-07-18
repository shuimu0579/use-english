// 当stackPop为空时，从 stackPush 弹出元素并压入 stackPop，直到 stackPush 为空。

var CQueue = function () {
  this.stackPush = [];
  this.stackPop = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.stackPush.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.stackPush.length === 0 && this.stackPop.length === 0) return -1;

  if (this.stackPop.length === 0) {
    while (this.stackPush.length) {
      this.stackPop.push(this.stackPush.pop());
    }
  }

  return this.stackPop.pop();
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
