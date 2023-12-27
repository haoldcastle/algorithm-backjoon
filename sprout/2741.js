const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim();
const n = +input;

const solution = (n) => {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str += `${i}${i === n ? "" : "\n"}`;
  }
  return str;
};

console.log(solution(n));
