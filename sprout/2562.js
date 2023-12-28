const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const numbers = input.map(Number);

const solution = () => {
  const max = Math.max(...numbers);
  const idx = numbers.indexOf(max);
  return `${max}\n${idx + 1}`;
};

console.log(solution());
