// 这种解法更加优雅
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (num) {
  var list = [];

  while (num % 2 === 0) {
    list.push(2);
    num = num / 2;
  }
  for (var i = 3; i <= Math.sqrt(num); i = i + 2) {
    while (num % i === 0) {
      list.push(i);
      num = num / i;
    }
  }
  if (num > 2) {
    list.push(num);
  }

  console.log(list.join(" "));
});

// 数据量大的时候，容易超时
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  var list = [];
  var count = 2;

  while (line > 1) {
    if (line % count === 0) {
      list.push(count);
      line = line / count;
    } else {
      count++;
    }
  }

  console.log(list.join(" "));
});
