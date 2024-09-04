const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  var list = [];

  var obj = {
    abc: 2,
    def: 3,
    ghi: 4,
    jkl: 5,
    mno: 6,
    pqrs: 7,
    tuv: 8,
    wxyz: 9,
  };

  for (var i of line) {
    if (65 <= i.charCodeAt(0) && i.charCodeAt(0) <= 90) {
      // let str = String.fromCharCode(i.toLowerCase().charCodeAt(0) + 1);
      let str =
        i === "Z"
          ? "a"
          : String.fromCharCode(i.toLowerCase().charCodeAt(0) + 1);
      list.push(str);
    } else if (97 <= i.charCodeAt(0) && i.charCodeAt(0) <= 122) {
      for (let s in obj) {
        if (s.includes(i)) {
          list.push(obj[s]);
          break;
        }
      }
    } else {
      list.push(i);
    }
  }
  let s = list.join("");
  console.log(s);
});
