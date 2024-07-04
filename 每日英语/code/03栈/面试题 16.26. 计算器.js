/**
 * @param {string} s
 * @return {number}
 */

/***
 *
 * 解题思路：不能用 if (operatorStack.pop() === "*")，
 *
 * 而是 if (operatorStack[operatorStack.length - 1] === "*") {
 * 然后 加上 operatorStack.pop();
 */

var calculate = function (s) {
  var operatorStack = [];
  var numberStack = [];
  var operator = ["+", "-", "*", "/"];

  for (let i = 0; i < s.length; i++) {
    if (!operator.includes(s[i])) {
      // if (operatorStack.pop() === "*") {
      if (operatorStack[operatorStack.length - 1] === "*") {
        var a = numberStack.pop();
        numberStack.push(Number(a) * Number(s[i]));
        operatorStack.pop();
        // } else if (operatorStack.pop() === "/") {
      } else if (operatorStack[operatorStack.length - 1] === "/") {
        var a = numberStack.pop();
        numberStack.push(Math.floor(Number(a) / Number(s[i])));
        operatorStack.pop();
      } else {
        numberStack.push(s[i]);
      }
    } else {
      operatorStack.push(s[i]);
    }
  }

  console.log("operatorStack", operatorStack);
  console.log("numberStack", numberStack);

  while (operatorStack.length) {
    var end = numberStack.pop();
    var start = numberStack.pop();
    var operator = operatorStack.pop();
    if (operator === "-") {
      numberStack.push(Number(start) - Number(end));
    } else if (operator === "+") {
      numberStack.push(Number(start) + Number(end));
    }
  }

  return Number(numberStack[0]);
};

var s = "3+2*2";
var res = calculate(s);
console.log(res);
