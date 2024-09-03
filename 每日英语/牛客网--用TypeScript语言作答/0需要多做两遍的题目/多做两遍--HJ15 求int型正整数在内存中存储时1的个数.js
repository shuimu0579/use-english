const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  var count = 0;

  while (line > 0) {
    count += line & 1;
    // line >> 1;
    line = line >> 1;
  }

  console.log(count);
});
