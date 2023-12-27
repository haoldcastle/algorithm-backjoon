const fs = require("fs");
const [n, ...inputs] = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const numbers = inputs.map((e) => e.split(" ").map(Number));

const solution = (numbers) => {
  const res = numbers.reduce((acc, curr, idx) => {
    return (acc += `${curr[0] + curr[1]}${
      idx + 1 === numbers.length ? "" : "\n"
    }`);
  }, "");
  return res;
};

console.log(solution(numbers));
