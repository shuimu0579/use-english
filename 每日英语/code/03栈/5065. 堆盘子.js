class SetOfStacks {
  /**
   * @param {number} sizePerStack
   */
  constructor(sizePerStack) {
    this.SetStacks = [new Array()];
    this.sizePerStack = sizePerStack;
  }

  /**
   * @param {number} value
   */
  push(value) {
    var topStack = this.SetStacks[this.SetStacks.length - 1] || [];
    if (topStack.length === this.sizePerStack) {
      this.SetStacks.push(new Array());
      topStack = this.SetStacks[this.SetStacks.length - 1];
    }
    topStack.push(value);
  }

  /**
   * @returns {number}
   */
  pop() {
    var topStack = this.SetStacks[this.SetStacks.length - 1] || [];
    if (topStack.length === 0) {
      if (this.SetStacks.length === 1) {
        // return null;
        return -1;
      } else {
        this.SetStacks[this.SetStacks.length - 1] = null;
        this.SetStacks.length--;
        topStack = this.SetStacks[this.SetStacks.length - 1];
        return topStack.pop();
      }
    }
    return topStack.pop();
  }

  /**
   * @returns {number}
   */
  peek() {
    var topStack = this.SetStacks[this.SetStacks.length - 1] || [];
    if (topStack.length === 0) {
      if (this.SetStacks.length === 1) {
        // return null;
        return -1;
      } else {
        topStack = this.SetStacks[this.SetStacks.length - 2];
        return topStack[topStack.length - 1];
      }
    }

    return topStack[topStack.length - 1];
  }

  /**
   * @returns {boolean}
   */
  isEmpty() {
    // return this.SetStacks.length === 0;
    return this.SetStacks.length === 1 && this.SetStacks[0].length === 0;
  }
}

var a = new SetOfStacks(3);
a.push(1);
a.push(2);
a.push(3);
a.push(4);
a.push(5);
a.push(6);
a.push(7);
a.pop();
a.pop();
a.pop();
a.pop();
a.pop();
a.pop();
a.pop();
a.pop();
a.push(1);
var b = a.peek();
console.log(a);
console.log(b);
