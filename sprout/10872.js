const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim();
const n = +input;

const solution = (n) => {
  let acc = 1;
  for (let i = 1; i <= n; i++) {
    acc *= i;
  }
  return acc;
};

console.log(solution(n));
