const fs = require("fs");
const inputs = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const inputNumbers = inputs.map(Number);

const solution = () => {
  const ckArr = Array.from({ length: 30 });
  inputNumbers.forEach((n) => (ckArr[n - 1] = true));
  const first = ckArr.indexOf(undefined);
  const second = ckArr.indexOf(undefined, first + 1);
  return `${first + 1}\n${second + 1}`;
};

console.log(solution(inputNumbers));
