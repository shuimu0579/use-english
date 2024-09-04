const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  var num = Math.floor(line * 2);

  if (line === Math.floor(line)) {
    console.log(line);
  } else if (line === Math.ceil(line)) {
    console.log(line);
  } else if (num % 2 === 0) {
    console.log(num / 2);
  } else if (num % 2 === 1) {
    console.log((num + 1) / 2);
  }
});
