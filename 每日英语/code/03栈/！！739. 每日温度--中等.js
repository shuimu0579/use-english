/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

var dailyTemperatures = function (temperatures) {
  var answer = new Array(temperatures.length).fill(0);
  var tempSatck = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (
      tempSatck.length &&
      temperatures[i] > temperatures[tempSatck[tempSatck.length - 1]]
    ) {
      var index = tempSatck.pop();
      answer[index] = i - index;
    }

    tempSatck.push(i);
  }

  return answer;
};

temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
var a = dailyTemperatures(temperatures);
console.log(a);
