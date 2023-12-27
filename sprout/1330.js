const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split(" ");
const [a, b] = input.map(Number);

const solution = (input) => {
  if (a > b) return ">";
  else if (a < b) return "<";
  else if (a === b) return "==";
};

console.log(solution(input));
