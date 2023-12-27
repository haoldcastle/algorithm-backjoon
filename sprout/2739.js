const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim();
const n = +input;

const solution = (n) => {
  let str = "";
  for (let i = 1; i <= 9; i++) {
    str += `${str === "" ? "" : "\n"}${n} * ${i} = ${n * i}`;
  }
  return str;
};

console.log(solution(n));
