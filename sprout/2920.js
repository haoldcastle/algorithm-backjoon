const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split(" ");
const numbers = input.map(Number);

const solution = () => {
  const isAscending = numbers.every((e, i) => e === i + 1);
  const isDescending = numbers.every((e, i) => e === numbers[0] - i);
  const res = isAscending ? "ascending" : isDescending ? "descending" : "mixed";
  return res;
};

console.log(solution());
