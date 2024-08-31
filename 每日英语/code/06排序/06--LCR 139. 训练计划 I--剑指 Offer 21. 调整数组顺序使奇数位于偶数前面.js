/**
 * @param {number[]} actions
 * @return {number[]}
 */
var trainingPlan = function (actions) {
  var oddArr = [];
  var evenArr = [];
  for (var i = 0; i < actions.length; i++) {
    if (actions[i] % 2 === 0) {
      evenArr.push(actions[i]);
    } else {
      oddArr.push(actions[i]);
    }
  }

  return [...oddArr, ...evenArr];
};
