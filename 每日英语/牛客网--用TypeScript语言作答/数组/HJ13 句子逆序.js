const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  var str = line.split(" ").reverse().join(" ");
  console.log(str);
});
