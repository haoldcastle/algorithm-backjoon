const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split(" ");
const [a, b, c] = input.map(Number);

const solution = (a, b, c) => {
  const res = a + b + c;
  return res;
};

console.log(solution(a, b, c));
