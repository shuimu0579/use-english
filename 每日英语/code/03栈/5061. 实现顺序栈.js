class ArrayStack {
  /**
   * @param {number} stackSize
   */
  constructor(stackSize) {
    // 不能用new Array(stackSize), 而要用new Array()
    // this.stackList = new Array(stackSize);
    this.stackList = new Array();
    this.size = stackSize;
  }

  /**
   * @param {number} value
   * @returns {boolean}
   */
  push(value) {
    if (this.stackList.length === this.size) return false;

    this.stackList.push(value);
    return true;
  }

  /**
   * @returns {number}
   */
  pop() {
    if (this.stackList.length === 0) return -1;

    return this.stackList.pop();
  }

  /**
   * @returns {number}
   */
  peek() {
    if (this.stackList.length === 0) return -1;

    return this.stackList[this.stackList.length - 1];
  }

  /**
   * @returns {boolean}
   */
  isEmpty() {
    return this.stackList.length === 0;
  }
}
