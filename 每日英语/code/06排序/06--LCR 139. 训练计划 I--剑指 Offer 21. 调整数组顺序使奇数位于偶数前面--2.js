```
教练使用整数数组 actions 记录一系列核心肌群训练项目编号。
为增强训练趣味性，需要将所有奇数编号训练项目调整至偶数编号训练项目之前。
请将调整后的训练项目编号以 数组 形式返回。
```;
/**
 * @param {number[]} actions
 * @return {number[]}
 */
var trainingPlan = function (actions) {
  var listLeft = [];
  var listRight = [];

  for (var i of actions) {
    if (i % 2 === 1) {
      listLeft.push(i);
    } else {
      listRight.push(i);
    }
  }

  return [...listLeft, ...listRight];
};
