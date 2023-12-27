const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split(" ");
const [a, b] = input.map(Number);

const solution = (a, b) => {
  const res = Math.max(a, b) - Math.min(a, b);
  return res;
};

console.log(solution(a, b));
