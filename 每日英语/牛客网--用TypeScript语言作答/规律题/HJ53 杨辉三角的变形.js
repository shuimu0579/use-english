const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function count(num) {
  if (num === 1 || num === 2) {
    return -1;
  }

  // line 大于 2 时，[2,3,2,4]循环
  if ((num - 2) % 4 === 1 || (num - 2) % 4 === 3) {
    return 2;
  } else if ((num - 2) % 4 === 2) {
    return 3;
  } else if ((num - 2) % 4 === 0) {
    return 4;
  }
}

rl.on("line", function (line) {
  let n = parseInt(line);
  console.log(count(n));
});
