const fs = require("fs");
const [...inputs] = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const numbers = inputs.map((e) => e.split(" ").map(Number));

const solution = (numbers) => {
  const res = numbers.reduce((acc, curr, idx) => {
    const sum = curr[0] + curr[1];
    if (sum === 0) return acc;
    return (acc += `${acc === "" ? "" : "\n"}${sum}`);
  }, "");
  return res;
};

console.log(solution(numbers));
